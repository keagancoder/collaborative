package com.citi.collaborative.dao;

import com.citi.collaborative.DateUtil;
import com.citi.collaborative.common.Ops;
import com.citi.collaborative.common.TSCRuntimeException;
import com.citi.collaborative.dao.annotation.Table;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import software.amazon.awssdk.enhanced.dynamodb.*;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;
import software.amazon.awssdk.enhanced.dynamodb.model.ScanEnhancedRequest;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;
import software.amazon.awssdk.services.dynamodb.model.DynamoDbException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DynamoDbService<T extends com.citi.collaborative.domain.ICommonDomain> {

    public static final Logger LOGGER = LoggerFactory.getLogger(DynamoDbService.class);
    public static final String AWS_INTERNAL_ERROR = "AWS DynamoDb internal error";

    private DynamoDbClient getClient() {
        Region region = Region.US_EAST_1;
        return DynamoDbClient.builder()
                .region(region)
                .build();
    }

    // Archives an item based on the key.
    public void update(Ops<T> op) {
        try {
            DynamoDbEnhancedClient enhancedClient = DynamoDbEnhancedClient.builder()
                    .dynamoDbClient(getClient())
                    .build();

            //noinspection unchecked
            DynamoDbTable<T> workTable = createDynamoDbTable(op.getData());

            //Get the Key object.
            Key key = Key.builder()
                    .partitionValue(op.getId())
                    .build();

            // Get the item by using the key.
            workTable.updateItem(r -> r.item(op.getData()));

        } catch (DynamoDbException e) {
            throw new TSCRuntimeException(AWS_INTERNAL_ERROR, e);
        }
    }


    public List<T> list(Ops<T> op) {
        List<T> results = Lists.newArrayList();
        try {
            //noinspection unchecked
            DynamoDbTable<T> table = createDynamoDbTable(op.getData());
            AttributeValue attr = AttributeValue.builder()
                    .s(op.getName())
                    .build();

            Map<String, AttributeValue> valMap = Maps.newHashMapWithExpectedSize(4);
            valMap.put(":val1", attr);
            Map<String, String> namesMap = new HashMap<>();
            namesMap.put("#name", "name");

            // Set the Expression so only Closed items are queried from the Work table.
            Expression expression = Expression.builder()
                    .expressionValues(valMap)
                    .expressionNames(namesMap)
                    .expression("#archive = :val1")
                    .build();

            ScanEnhancedRequest enhancedRequest = ScanEnhancedRequest.builder()
                    .filterExpression(expression)
                    .build();

            for (T t : table.scan(enhancedRequest).items()) {
                results.add(t);
            }
            return results;
        } catch (Exception e) {
            throw new TSCRuntimeException(AWS_INTERNAL_ERROR, e);
        }
    }

    /**
     * @param data
     * @throws TSCRuntimeException() if some error occur
     */
    public void putRecord(T data) {
        try {
            //noinspection unchecked
            DynamoDbTable<T> workTable = createDynamoDbTable(data);
            data.setCreatedTime(DateUtil.now());
            data.setLastModifiedTime(DateUtil.now());
            workTable.putItem(data);
        } catch (Exception e) {
            throw new TSCRuntimeException(AWS_INTERNAL_ERROR, e);
        }
    }


    protected DynamoDbTable<T> createDynamoDbTable(T data) {
        //noinspection unchecked
        Class<T> clz = (Class<T>) data.getClass();
        validate(clz);
        DynamoDbEnhancedClient enhancedClient = DynamoDbEnhancedClient.builder()
                .dynamoDbClient(getClient())
                .build();
        // Create a DynamoDbTable object.
        //noinspection OptionalGetWithoutIsPresent
        return enhancedClient.table(data.getTableName().get(), TableSchema.fromBean(clz));
    }

    private void validate(Class<T> clz) {
        Table table = clz.getDeclaredAnnotation(Table.class);
        Assert.notNull(table, "Table name can not be null");
        Assert.notNull(clz.getDeclaredAnnotation(DynamoDbBean.class), " DynamoDbBean annotation is required");
    }

}