package com.ramsbaby.qna.advice.customException;

public class CCounselorIdNotMatcheException extends RuntimeException {
    private String code;

    public CCounselorIdNotMatcheException(String msg, Throwable t) {
        super(msg, t);
    }

    public CCounselorIdNotMatcheException(ExceptionType code) {
        super(code.name());
        this.code = code.getCode();
    }

    public CCounselorIdNotMatcheException() {
        super();
    }
}