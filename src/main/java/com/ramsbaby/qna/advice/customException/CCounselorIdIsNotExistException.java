package com.ramsbaby.qna.advice.customException;

public class CCounselorIdIsNotExistException extends RuntimeException {
    private String code;

    public CCounselorIdIsNotExistException(String msg, Throwable t) {
        super(msg, t);
    }

    public CCounselorIdIsNotExistException(ExceptionType code) {
        super(code.name());
        this.code = code.getCode();
    }

    public CCounselorIdIsNotExistException() {
        super();
    }
}