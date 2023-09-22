package com.citi.collaborative.service.api;

import com.citi.collaborative.domain.Person;

import java.util.List;

public interface IPersonService extends IBaseService<Person> {

    List<Person> queryPerson(String nameFirst, String nameLast);
}
