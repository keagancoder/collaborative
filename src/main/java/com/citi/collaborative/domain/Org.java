package com.citi.collaborative.domain;

import lombok.Data;
import lombok.experimental.SuperBuilder;


@Data
@SuperBuilder
public class Org {

    private long id;
    private String name;
    private Tag tag;


    enum Tag{

    }
}
