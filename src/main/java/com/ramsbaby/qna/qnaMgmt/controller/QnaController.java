package com.ramsbaby.qna.qnaMgmt.controller;

import com.ramsbaby.qna.qnaMgmt.entity.QnaHistoryEntity;
import com.ramsbaby.qna.qnaMgmt.model.AnswerModel;
import com.ramsbaby.qna.qnaMgmt.model.InqueryModel;
import com.ramsbaby.qna.qnaMgmt.model.QnaHistoryModel;
import com.ramsbaby.qna.qnaMgmt.model.UserModel;
import com.ramsbaby.qna.qnaMgmt.model.common.response.CommonResult;
import com.ramsbaby.qna.qnaMgmt.model.common.response.ListResult;
import com.ramsbaby.qna.qnaMgmt.model.common.response.SingleResult;
import com.ramsbaby.qna.qnaMgmt.repository.QnaHistoryRepo;
import com.ramsbaby.qna.qnaMgmt.service.common.ResponseService;
import com.ramsbaby.qna.qnaMgmt.service.counselor.CounselorService;
import com.ramsbaby.qna.qnaMgmt.service.customer.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 8:13
 */
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api", produces = "application/json; charset=utf8")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class QnaController {
    private static final String X_USER_ID = "X-USER-ID";

    private final ResponseService responseService;
    private final CustomerService customerService;
    private final CounselorService counselorService;
    private final QnaHistoryRepo qnaHistoryRepo;

    //고객 - 문의 등록
    @PostMapping("/inquery")
    public SingleResult addInquery(@RequestBody InqueryModel inqueryModel) {
        InqueryModel resultModel = customerService.saveInquery(inqueryModel);
        return responseService.getSingleResult(resultModel);
    }

    //고객 - 본인글 전체 확인
    @GetMapping("/myInquerys")
    public ListResult<InqueryModel> getAllMyInquerys(@RequestHeader(X_USER_ID) String userId) {
        List<InqueryModel> resultModel = customerService.getAllMyInquerys(userId);
        return responseService.getListResult(resultModel);
    }

    //고객 - 상담사 답변 가져오기
    @GetMapping("/myAnswer/{inqueryId}")
    public SingleResult getMyAnswer(@RequestHeader(X_USER_ID) String userId,
                                    @PathVariable Long inqueryId) {
        AnswerModel resultModel = customerService.getMyAnswer(userId, inqueryId);
        return responseService.getSingleResult(resultModel);
    }

    //상담사 - 회원가입
    @PostMapping("/user")
    public SingleResult addUser(@RequestBody UserModel userModel) {
        UserModel resultModel = counselorService.saveUser(userModel);
        return responseService.getSingleResult(resultModel);
    }

    //상담사 - 로그인
    @PostMapping("/userLogin")
    public SingleResult loginUser(@RequestBody UserModel userModel) {
        UserModel resultModel = counselorService.getUser(userModel);
        return responseService.getSingleResult(resultModel);
    }

    //상담사 - 문의 목록 전체 확인(답변상태 : 'N'인 데이터만)
    @GetMapping("/inquerys")
    public ListResult<InqueryModel> getAllInquerys() {
        return responseService.getListResult(counselorService.getAllInquerys());
    }

    //상담사 - 문의글 본인으로 지정
    @PatchMapping("/inqueryChoice/{inqueryId}")
    public CommonResult choiceInquery(@RequestHeader(X_USER_ID) String userId,
                                      @PathVariable Long inqueryId) {
        counselorService.updateInquery(userId, inqueryId);
        return responseService.getSuccessResult();
    }

    //상담사 - 문의글 번호 받아서 답변등록(상담사 이미 있는지 확인해야함)
    @PostMapping("/answers")
    public SingleResult addAnswers(@RequestHeader(X_USER_ID) String userId,
                                   @RequestBody AnswerModel answersModel) {
        AnswerModel resultModel = counselorService.saveAnswers(userId, answersModel);
        return responseService.getSingleResult(resultModel);
    }


    //히스토리 가져오기
    @GetMapping("/history")
    public ListResult<QnaHistoryModel> getHistory() {
        List<QnaHistoryEntity> qnaHistoryModels = qnaHistoryRepo.findAll();
        return responseService.getListResult(QnaHistoryModel.setEntityList(qnaHistoryModels));
    }

}
