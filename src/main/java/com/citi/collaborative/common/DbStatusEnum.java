package com.citi.collaborative.common;


import lombok.Getter;

@Getter
public enum DbStatusEnum {

    deleted(0),
    normal(1);

    private final int status;

    DbStatusEnum(int status) {
        this.status = status;
    }
}
