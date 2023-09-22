package com.citi.collaborative.common;


import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.Collection;

@Builder
@ToString
@Getter
public class InternalResponse<T> {

    private boolean success;
    private String errorMsg;
    private String errorCode;
    private Collection<T> data;

    public static <E> InternalResponse<E> success(Collection<E> data) {
        return InternalResponse.<E>builder()
                .success(true)
                .data(data)
                .build();
    }

    public static <E> InternalResponse<E> fail(String errorMsg) {
        return InternalResponse.<E>builder()
                .success(false)
                .errorMsg(errorMsg)
                .build();
    }

}
