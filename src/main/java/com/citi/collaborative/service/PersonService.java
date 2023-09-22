package com.citi.collaborative.service;


import com.citi.collaborative.domain.Person;
import com.citi.collaborative.service.api.IPersonService;
import org.springframework.stereotype.Service;

@Service
public class PersonService extends AbstractService<Person> implements IPersonService {
}
