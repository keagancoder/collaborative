package com.citi.collaborative.contoller;

import com.alibaba.fastjson.JSON;
import com.citi.collaborative.common.DbStatusEnum;
import com.citi.collaborative.common.ResponseMessage;
import com.citi.collaborative.domain.Org;
import com.google.common.collect.Lists;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class OrgControllerTest {

    public static final Logger LOGGER = LoggerFactory.getLogger(OrgControllerTest.class);

    @Autowired
    private OrgController orgController;

    @Test
    public void testFindByName() {
        ResponseMessage<Org> foo = orgController.list("Foo");
        LOGGER.info(">>> find [{}]", JSON.toJSON(foo));


        Org org = Org.builder()
                .name("Health Centers")
                .tag(Org.Tag.LIFE_SKILLS.name())
                .id(String.valueOf(System.currentTimeMillis()))
                .function("medical, dental and mental health counseling")
                .status(DbStatusEnum.NORMAL.name())
                .build();

        Org org2 = Org.builder()
                .name("Credit Unions")
                .tag(Org.Tag.ELDERLY.name())
                .id(String.valueOf(System.currentTimeMillis()))
                .function("saving accounts, credit counseling services")
                .status(DbStatusEnum.NORMAL.name())
                .build();
        ResponseMessage<Org> success = ResponseMessage.success(Lists.newArrayList(org, org2));
        LOGGER.info(">> response = {}", JSON.toJSON(success));
    }

}