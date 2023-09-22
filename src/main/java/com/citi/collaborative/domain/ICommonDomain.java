package com.citi.collaborative.domain;

import com.citi.collaborative.dao.annotation.Table;
import lombok.Getter;
import lombok.Setter;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbPartitionKey;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbSortKey;

import java.util.Objects;
import java.util.Optional;

@Getter
@Setter
public abstract class ICommonDomain {

    private String id;
    private String name;
    private String createdTime;
    private String lastModifiedTime;
    private int status;

    public Optional<String> getTableName() {
        Table tableAnnotation = getClass().getDeclaredAnnotation(Table.class);
        if (Objects.isNull(tableAnnotation)) {
            return Optional.empty();
        }

        return Optional.of(tableAnnotation.value());
    }

    @DynamoDbPartitionKey
    public String getName() {
        return name;
    }

    @DynamoDbSortKey
    public String getId() {
        return id;
    }
}
