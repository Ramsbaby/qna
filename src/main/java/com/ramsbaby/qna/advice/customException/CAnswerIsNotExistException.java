package com.ramsbaby.qna.advice.customException;

public class CAnswerIsNotExistException extends RuntimeException {
    private String code;

    public CAnswerIsNotExistException(String msg, Throwable t) {
        super(msg, t);
    }

    public CAnswerIsNotExistException(ExceptionType code) {
        super(code.name());
        this.code = code.getCode();
    }

    public CAnswerIsNotExistException() {
        super();
    }
}