package com.ramsbaby.qna.qnaMgmt.model.common.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 10:55
 */
@Getter
@Setter
public class ListResult<T> extends CommonResult {
    private List<T> response;
}
