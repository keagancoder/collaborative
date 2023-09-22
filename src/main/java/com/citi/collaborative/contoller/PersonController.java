package com.citi.collaborative.contoller;

import com.citi.collaborative.common.ResponseMessage;
import com.citi.collaborative.domain.Person;
import com.citi.collaborative.service.api.IPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("person")
public class PersonController {

    @Autowired
    private IPersonService personService;

    @GetMapping("list/{nameFirst}/{nameLast}")
    public ResponseMessage<Person> list(@PathVariable(required = false) String nameFirst, @PathVariable(required = false) String nameLast) {
        return ResponseMessage.success(personService.queryPerson(nameFirst, nameLast));
    }
}
