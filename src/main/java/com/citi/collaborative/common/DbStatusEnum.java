package com.citi.collaborative.common;


import lombok.Getter;

@Getter
public enum DbStatusEnum {

    DELETED(0),
    NORMAL(1);

    private final int status;

    DbStatusEnum(int status) {
        this.status = status;
    }
}
