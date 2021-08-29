package com.ramsbaby.qna.advice.customException;

public class CCounselorLoginFailureException extends RuntimeException {
    private String code;

    public CCounselorLoginFailureException(String msg, Throwable t) {
        super(msg, t);
    }

    public CCounselorLoginFailureException(ExceptionType code) {
        super(code.name());
        this.code = code.getCode();
    }

    public CCounselorLoginFailureException() {
        super();
    }
}