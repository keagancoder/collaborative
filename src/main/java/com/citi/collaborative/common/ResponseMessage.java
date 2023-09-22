package com.citi.collaborative.common;

import lombok.Data;
import lombok.experimental.SuperBuilder;

import java.util.Collection;

@Data
@SuperBuilder
public class ResponseMessage<T> {

    private String requestId;
    private boolean success;
    private String errorCode;
    private String errorMsg;
    private Collection<T> data;

}
