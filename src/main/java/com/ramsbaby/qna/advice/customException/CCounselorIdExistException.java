package com.ramsbaby.qna.advice.customException;

public class CCounselorIdExistException extends RuntimeException {
    private String code;

    public CCounselorIdExistException(String msg, Throwable t) {
        super(msg, t);
    }

    public CCounselorIdExistException(ExceptionType code) {
        super(code.name());
        this.code = code.getCode();
    }

    public CCounselorIdExistException() {
        super();
    }
}