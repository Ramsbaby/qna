package com.ramsbaby.qna.advice.customException;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

/**
 * @author by Ming(thinkub0219@gmail.com) on 2020/11/23.
 */

@Getter
@RequiredArgsConstructor
public enum ExceptionType {
    SERVER_ERROR("-9999", "serverError.msg"),
    ANSWER_IS_NOT_EXIST("-1001", "answerIsNotExist.msg"),
    COUNSELOR_ID_EXIST("-1002", "counselorIdExist.msg"),
    COUNSELOR_ID_IS_NOT_EXIST("-1003", "counselorIdIsNotExist.msg"),
    COUNSELOR_ID_NOT_MATCHE("-1004", "counselorIdNotMatche.msg"),
    COUNSELOR_LOGIN_FAILURE("-1005", "counselorLoginFailure.msg"),
    INQUERY_ID_IS_NOT_EXIST("-1006", "inqueryIdIsNotExist.msg");


    private static final Map<String, ExceptionType> enumMap = new HashMap<>(values().length);

    static {
        Stream.of(values()).forEach(v -> enumMap.put(v.getCode(), v));
    }

    private final String code;
    private final String message;

    public static ExceptionType codeOf(String code) {
        return Optional.ofNullable(enumMap.get(code)).orElseThrow(IllegalArgumentException::new);
    }
}
