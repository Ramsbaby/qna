package com.ramsbaby.qna.advice.customException;

import lombok.Getter;

/**
 * @author : RAMSBABY
 * @date : 2021-08-28 오후 11:19
 */
@Getter
public class CustomException extends RuntimeException {
    private String code;

    public CustomException() {
        super();
    }

    public CustomException(ExceptionType code) {
        super(code.name());
        this.code = code.getCode();
    }
}
