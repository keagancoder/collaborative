package com.citi.collaborative.common;

import lombok.Data;
import lombok.experimental.SuperBuilder;

import java.util.Collection;

@Data
@SuperBuilder
public class ResponseMessage<T> {

    private String requestId;
    private boolean success;
    private String retCode;
    private String errorMsg;
    private Collection<T> data;


    public static <T> ResponseMessage<T> success(Collection<T> data) {
        return ResponseMessage.<T>builder()
                .success(true)
                .data(data)
                .retCode("REQUEST_IS_ACCEPT")
                .errorMsg("null")
                .build();
    }

    public static <T> ResponseMessage<T> success(InternalResponse<T> response) {
        return ResponseMessage.<T>builder()
                .success(response.isSuccess())
                .data(response.getData())
                .errorMsg("null")
                .build();
    }


    public static <T> ResponseMessage<T> fail(String errorCode, String errorMsg) {
        return ResponseMessage.<T>builder()
                .success(false)
                .retCode(errorCode)
                .errorMsg(errorMsg)
                .build();
    }

    public static <T> ResponseMessage<T> fail(InternalResponse<T> response) {
        return ResponseMessage.<T>builder()
                .success(false)
                .retCode("ERROR")
                .errorMsg(response.getErrorMsg())
                .build();
    }

    public static <T> ResponseMessage<T> fail(String errorCode) {
        return fail(errorCode, "null");
    }

}
