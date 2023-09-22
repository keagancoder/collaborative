package com.citi.collaborative.contoller;

import com.alibaba.fastjson.JSON;
import com.citi.collaborative.common.DbStatusEnum;
import com.citi.collaborative.common.ResponseMessage;
import com.citi.collaborative.domain.Org;
import com.citi.collaborative.domain.Person;
import com.google.common.collect.Lists;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class PersonControllerTest {

    public static final Logger LOGGER = LoggerFactory.getLogger(PersonControllerTest.class);

    @Autowired
    private PersonController personController;

    @Test
    public void testFindByName() {
        ResponseMessage<Person> list = personController.list("Foo", "name");
        LOGGER.info(">>> find [{}]", JSON.toJSON(list));

    }

}