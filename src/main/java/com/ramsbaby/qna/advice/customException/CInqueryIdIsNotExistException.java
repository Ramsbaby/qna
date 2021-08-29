package com.ramsbaby.qna.advice.customException;

public class CInqueryIdIsNotExistException extends RuntimeException {
    private String code;

    public CInqueryIdIsNotExistException(String msg, Throwable t) {
        super(msg, t);
    }

    public CInqueryIdIsNotExistException(ExceptionType code) {
        super(code.name());
        this.code = code.getCode();
    }

    public CInqueryIdIsNotExistException() {
        super();
    }
}