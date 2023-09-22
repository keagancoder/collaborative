package com.citi.collaborative.aws;

import com.citi.collaborative.common.DbStatusEnum;
import com.citi.collaborative.common.Ops;
import com.citi.collaborative.dao.DynamoDbService;
import com.citi.collaborative.domain.Org;
import com.citi.collaborative.domain.Org.Tag;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collection;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class DynamoDbServiceTest {

    public static final Logger LOGGER = LoggerFactory.getLogger(DynamoDbServiceTest.class);

    private final DynamoDbService<Org> dynamoDbService = new DynamoDbService<>();

    @Test
    public void testPutOrgRecord() {
        Org org = Org.builder()
                .name("Health Centers")
                .tag(Tag.LIFE_SKILLS.name())
                .id(String.valueOf(System.currentTimeMillis()))
                .function("medical, dental and mental health counseling")
                .status(DbStatusEnum.NORMAL.name())
                .build();

        dynamoDbService.putRecord(org);
        assertNotNull(org);
    }

    @Test
    public void testListRecords() {
        Ops<Org> ops = Ops.<Org>builder()
                .name("Health Centers")
                .build();
        Collection<Org> list = dynamoDbService.list(ops, Org.class);
        assertTrue(list.size() > 0);
    }


}
