package com.ramsbaby.qna.qnaMgmt.entity.listener;

import com.ramsbaby.qna.qnaMgmt.entity.AnswersEntity;
import com.ramsbaby.qna.qnaMgmt.entity.QnaHistoryEntity;
import com.ramsbaby.qna.qnaMgmt.repository.QnaHistoryRepo;
import com.ramsbaby.qna.qnaMgmt.support.MyBeanUtils;
import org.springframework.stereotype.Component;

import javax.persistence.PostPersist;
import javax.persistence.PostUpdate;

/**
 * @author : RAMSBABY
 * @date : 2021-08-29 오전 2:08
 */
@Component
public class QnaHistoryAnswersListener {
    @PostPersist
    @PostUpdate
    public void preUpdateAndPrePersist(Object o){
        QnaHistoryRepo qnaHistoryRepo = MyBeanUtils.getBean(QnaHistoryRepo.class);
        AnswersEntity answers = (AnswersEntity) o;

        QnaHistoryEntity qnaHistory = new QnaHistoryEntity();
        qnaHistory.setInqueryId(answers.getInquerys().getId());
        qnaHistory.setAnswerId(answers.getId());
        qnaHistory.setUserId(answers.getInquerys().getUserId());
        qnaHistory.setCounselorId(answers.getUsers().getId());
        qnaHistory.setIsAnswered(answers.getInquerys().getIsAnswered());

        qnaHistory.setSavedArea("ANSWERS");

        qnaHistoryRepo.save(qnaHistory);
    }

}
