package com.ramsbaby.qna.qnaMgmt.service.customer;

import com.ramsbaby.qna.qnaMgmt.model.AnswerModel;
import com.ramsbaby.qna.qnaMgmt.model.InqueryModel;

import java.util.List;

/**
 * @author : RAMSBABY
 * @date : 2021-08-25 오전 2:34
 */
public interface CustomerService {
    //고객 - 문의글 등록
    InqueryModel saveInquery(InqueryModel inqueryModel);

    //고객 - 본인글 전체 확인
    List<InqueryModel> getAllMyInquerys(String userId);

    //고객 - 상담사 답변 확인
    AnswerModel getMyAnswer(String counselorId, Long inqueryId);
}
