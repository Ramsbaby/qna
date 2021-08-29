package com.ramsbaby.qna.qnaMgmt.service.common;

import com.ramsbaby.qna.qnaMgmt.model.common.response.CommonResult;
import com.ramsbaby.qna.qnaMgmt.model.common.response.ListResult;
import com.ramsbaby.qna.qnaMgmt.model.common.response.SingleResult;
import com.ramsbaby.qna.qnaMgmt.model.common.response.enumResponse.CommonResponse;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 10:52
 */
@Service
public class ResponseServiceImpl implements ResponseService {

    // 단일건 결과를 처리하는 메소드
    public <T> SingleResult getSingleResult(T data) {
        SingleResult result = new SingleResult();
        result.setResponse(data);
        setSuccessResultData(result);
        return result;
    }

    // 다중건 결과를 처리하는 메소드
    public <T> ListResult<T> getListResult(List<T> list) {
        ListResult<T> result = new ListResult<>();
        result.setResponse(list);
        setSuccessResultList(result);
        return result;
    }

    // 성공 결과만 처리하는 메소드
    public CommonResult getSuccessResult() {
        CommonResult result = new CommonResult();
        result.setResponse(true);
        setSuccessResultData(result);
        return result;
    }

    // 실패 결과만 처리하는 메소드
    public <T> CommonResult<T> getFailResult(T code, T msg) {
        CommonResult<T> result = new CommonResult<>();
        result.setSuccess(false);
        result.setResponse(null);

        HashMap<String, T> errorMap = new HashMap<>();
        errorMap.put("message", msg);
        errorMap.put("status", code);

        result.setError(errorMap);
        return result;
    }

    // 결과 모델에 api 요청 성공 다중 데이터를 세팅해주는 메소드
    public void setSuccessResultList(CommonResult result) {
        result.setSuccess(true);
        result.setResponse(CommonResponse.SUCCESS.getList());
        result.setError(null);
    }

    // 결과 모델에 api 요청 성공 단일 데이터를 세팅해주는 메소드
    public void setSuccessResultData(CommonResult result) {
        result.setSuccess(true);
        result.setError(null);
    }
}
