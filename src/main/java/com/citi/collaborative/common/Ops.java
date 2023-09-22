package com.citi.collaborative.common;


import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class Ops<T> {

    String name;

    String status;

    String id;

    T data;
}
