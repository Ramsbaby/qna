package com.ramsbaby.qna.qnaMgmt.model.common.response;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 10:55
 */
@Getter
@Setter
public class CommonResult<T> {
    private boolean success;

    private T response;

    private HashMap<String, T> error;
}
