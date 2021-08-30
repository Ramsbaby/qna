package com.ramsbaby.qna.qnaMgmt.service.counselor;

import com.ramsbaby.qna.advice.customException.*;
import com.ramsbaby.qna.qnaMgmt.entity.AnswersEntity;
import com.ramsbaby.qna.qnaMgmt.entity.InquerysEntity;
import com.ramsbaby.qna.qnaMgmt.entity.UserEntity;
import com.ramsbaby.qna.qnaMgmt.model.AnswerModel;
import com.ramsbaby.qna.qnaMgmt.model.InqueryModel;
import com.ramsbaby.qna.qnaMgmt.model.UserModel;
import com.ramsbaby.qna.qnaMgmt.repository.AnswersRepo;
import com.ramsbaby.qna.qnaMgmt.repository.InquerysRepo;
import com.ramsbaby.qna.qnaMgmt.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * @author : RAMSBABY
 * @date : 2021-08-25 오전 2:31
 */
@Service
@RequiredArgsConstructor
public class CounselorServiceImpl implements CounselorService {
    private final UserRepo userRepo;
    private final InquerysRepo inquerysRepo;
    private final AnswersRepo answersRepo;

    //상담사 - 회원가입
    @Transactional
    public UserModel saveUser(UserModel userModel) {
        boolean hasUser = userRepo.existsById(userModel.getId());

        if(hasUser) {
            throw new CCounselorIdExistException(ExceptionType.COUNSELOR_ID_EXIST);
        }

        return UserModel.of(userRepo.save(UserEntity.create(userModel)));
    }

    //상담사 - 로그인
    public UserModel getUser(UserModel userModel) {
        UserModel resultModel;
        Optional<UserEntity> isCounselorExist =
                userRepo.findByIdAndPassword(userModel.getId(), userModel.getPassword());

        if (isCounselorExist.isPresent()) {//이미 있는 상담사 ID인 경우
            resultModel = UserModel.of(isCounselorExist.get());
        } else {
            throw new CCounselorLoginFailureException(ExceptionType.COUNSELOR_LOGIN_FAILURE);
        }
        return resultModel;
    }

    //상담사 - 문의글 전체 확인(답변 미등록 상태만 조회)
    public List<InqueryModel> getAllInquerys() {
        List<InquerysEntity> inqueryAllList = inquerysRepo.findAllByIsAnswered("N", Sort.by(Sort.Direction.ASC, "createdAt"));
        return InqueryModel.setEntityList(inqueryAllList);
    }

    //상담사 - 문의글 본인으로 지정 -> 문의글의 counselorId를 상담사 userid로 변경
    //지정 상담사 있으면 에러
    @Transactional
    public void updateInquery(String counselorId, Long inqueryId) {
        InquerysEntity inquery = inquerysRepo.findById(inqueryId).
                orElseThrow(() -> new CInqueryIdIsNotExistException(ExceptionType.INQUERY_ID_IS_NOT_EXIST));

        //지정 상담사가 있으면 에러 발생.
        if (inquery.getCounselorId() != null) {
            throw new CCounselorIdExistException(ExceptionType.COUNSELOR_ID_EXIST);
        }

        inquery.setCounselorId(counselorId);
        inquerysRepo.save(inquery);
    }

    //상담사 - 답변 등록
    //지정 상담사 없거나, 지정 상담사가 본인이 아니면 에러
    @Transactional
    public AnswerModel saveAnswers(String counselorId, AnswerModel answersModel) {
        InquerysEntity inquery = inquerysRepo.findById(answersModel.getInqueryId())
                .orElseThrow(() -> new CInqueryIdIsNotExistException(ExceptionType.INQUERY_ID_IS_NOT_EXIST));

        //지정 상담사가 없거나, 지정 상담사가 본인이 아닌 경우 에러 발생
        inquery.validCounselor(counselorId);

        UserEntity user = userRepo.findById(counselorId)
                .orElseThrow(() -> new CCounselorIdIsNotExistException(ExceptionType.COUNSELOR_ID_IS_NOT_EXIST));

        Optional<AnswersEntity> answers = answersRepo.findByInquerys(inquery);
        if (answers.isPresent() == true) {//기존 답변 데이터 있으면 수정로직
            answers.get().setTitle(answersModel.getTitle());
            answers.get().setContent(answersModel.getContent());
        } else {//답변 데이터 없으면 새로 생성
            answers = Optional.of(AnswersEntity.create(answersModel, inquery, user));
            answers.get().setTitle(answersModel.getTitle());
            answers.get().setContent(answersModel.getContent());
        }


        //문의테이블 답변여부 Y로 변경
        inquery.setIsAnswered("Y");
        inquerysRepo.saveAndFlush(inquery);

        //답변등록
        return AnswerModel.of(answersRepo.save(answers.get()), inquery.getId(), user.getId());
    }

}
