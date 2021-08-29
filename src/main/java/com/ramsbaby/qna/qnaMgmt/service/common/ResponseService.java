package com.ramsbaby.qna.qnaMgmt.service.common;

import com.ramsbaby.qna.qnaMgmt.model.common.response.CommonResult;
import com.ramsbaby.qna.qnaMgmt.model.common.response.ListResult;
import com.ramsbaby.qna.qnaMgmt.model.common.response.SingleResult;

import java.util.List;

/**
 * @author : RAMSBABY
 * @date : 2021-08-25 오전 2:55
 */
public interface ResponseService {
    <T> SingleResult getSingleResult(T data);

    <T> ListResult<T> getListResult(List<T> list);

    CommonResult getSuccessResult();

    <T> CommonResult<T> getFailResult(T code, T msg);

    void setSuccessResultList(CommonResult result);

    void setSuccessResultData(CommonResult result);
}
