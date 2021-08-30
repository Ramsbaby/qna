package com.ramsbaby.qna.qnaMgmt.service.customer;

import com.ramsbaby.qna.advice.customException.CAnswerIsNotExistException;
import com.ramsbaby.qna.advice.customException.CInqueryIdIsNotExistException;
import com.ramsbaby.qna.advice.customException.ExceptionType;
import com.ramsbaby.qna.qnaMgmt.entity.AnswersEntity;
import com.ramsbaby.qna.qnaMgmt.entity.InquerysEntity;
import com.ramsbaby.qna.qnaMgmt.model.AnswerModel;
import com.ramsbaby.qna.qnaMgmt.model.InqueryModel;
import com.ramsbaby.qna.qnaMgmt.repository.AnswersRepo;
import com.ramsbaby.qna.qnaMgmt.repository.InquerysRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author : RAMSBABY
 * @date : 2021-08-25 오전 2:32
 */
@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final InquerysRepo inquerysRepo;
    private final AnswersRepo answersRepo;

    //고객 - 문의글 등록
    @Transactional
    public InqueryModel saveInquery(InqueryModel inqueryModel) {
        InquerysEntity inquery = InquerysEntity.create(inqueryModel);
        return InqueryModel.of(inquerysRepo.save(inquery));
    }

    //고객 - 본인 문의글 전체 확인
    public List<InqueryModel> getAllMyInquerys(String userId) {
        List<InquerysEntity> inqueryAllList = inquerysRepo.findAllByUserId(userId, Sort.by(Sort.Direction.ASC, "createdAt"));
        if (inqueryAllList.isEmpty()) {
            throw new CInqueryIdIsNotExistException(ExceptionType.INQUERY_ID_IS_NOT_EXIST);
        }
        return InqueryModel.setEntityList(inqueryAllList);
    }

    //고객 - 내 답변 확인
    public AnswerModel getMyAnswer(String counselorId, Long inqueryId) {
        InquerysEntity inquerys = inquerysRepo.findById(inqueryId)
                .orElseThrow(() -> new CInqueryIdIsNotExistException(ExceptionType.INQUERY_ID_IS_NOT_EXIST));
        AnswersEntity myAnswer = answersRepo.findByInquerys(inquerys)
                .orElseThrow(() -> new CAnswerIsNotExistException(ExceptionType.ANSWER_IS_NOT_EXIST));

        return AnswerModel.of(myAnswer, inqueryId, counselorId);
    }
}
