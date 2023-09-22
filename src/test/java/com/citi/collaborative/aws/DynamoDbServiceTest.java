package com.citi.collaborative.aws;

import com.citi.collaborative.common.DbStatusEnum;
import com.citi.collaborative.dao.DynamoDbService;
import com.citi.collaborative.domain.Org;
import com.citi.collaborative.domain.Org.Tag;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class DynamoDbServiceTest {

    public static final Logger LOGGER = LoggerFactory.getLogger(DynamoDbServiceTest.class);

    @Autowired
    private DynamoDbService<Org> dynamoDbService;

    @Test
    public void testPutOrgRecord() {
        Org org = Org.builder()
                .name("Health Centers")
                .tag(Tag.LIFE_SKILLS.name())
                .id(String.valueOf(System.currentTimeMillis()))
                .function("medical, dental and mental health counseling")
                .status(DbStatusEnum.normal.getStatus())
                .build();

        dynamoDbService.putRecord(org);
        assertNotNull(org);
    }


}
