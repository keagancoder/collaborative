package com.citi.collaborative.common;


import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class Ops<T> {

    String name;

    String val;

    String status;

    String id;

    T data;
}
