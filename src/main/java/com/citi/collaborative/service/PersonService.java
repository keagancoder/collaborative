package com.citi.collaborative.service;


import com.citi.collaborative.domain.Person;
import com.citi.collaborative.service.api.IPersonService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PersonService extends AbstractService<Person> implements IPersonService {

    @Override
    public List<Person> queryPerson(String nameFirst, String nameLast){
        Person person = Person.builder().withId("123").withAge("12").withBirthDate(new Date().toString()).build();
        Person person2 = Person.builder().withId("456").withAge("22").withBirthDate(new Date().toString()).build();
        return List.of(person, person2);
    }
}
