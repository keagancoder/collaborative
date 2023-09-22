package com.citi.collaborative.common;


import lombok.Getter;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Getter
public class Ops<T> {

    String name;

    String status;

    String id;

    T data;
}
