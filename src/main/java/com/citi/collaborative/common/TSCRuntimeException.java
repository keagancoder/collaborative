package com.citi.collaborative.common;


public class TSCRuntimeException extends RuntimeException {
    public TSCRuntimeException() {
        super();
    }

    public TSCRuntimeException(String message) {
        super(message);
    }

    public TSCRuntimeException(String message, Throwable cause) {
        super(message, cause);
    }

    public TSCRuntimeException(Throwable cause) {
        super(cause);
    }
}

