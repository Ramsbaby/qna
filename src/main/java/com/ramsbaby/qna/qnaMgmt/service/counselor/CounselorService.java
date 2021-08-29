package com.ramsbaby.qna.qnaMgmt.service.counselor;

import com.ramsbaby.qna.qnaMgmt.model.AnswerModel;
import com.ramsbaby.qna.qnaMgmt.model.InqueryModel;
import com.ramsbaby.qna.qnaMgmt.model.UserModel;

import java.util.List;

/**
 * @author : RAMSBABY
 * @date : 2021-08-25 오전 2:31
 */
public interface CounselorService {
    //상담사 - 회원가입
    UserModel saveUser(UserModel userModel);

    //상담사 - 로그인
    UserModel getUser(UserModel userModel);

    //상담사 - 문의글 전체 확인
    List<InqueryModel> getAllInquerys();

    //상담사 - 문의글 본인으로 지정
    void updateInquery(String counselorId, Long inqueryId);

    //상담사 - 답변 등록
    AnswerModel saveAnswers(String counselorId, AnswerModel answersModel);

}