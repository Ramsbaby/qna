package com.ramsbaby.qna.qnaMgmt.entity.listener;

import com.ramsbaby.qna.qnaMgmt.entity.InquerysEntity;
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
public class QnaHistoryInquerysListener {
    @PostPersist
    @PostUpdate
    public void preUpdateAndPrePersist(Object o){
        QnaHistoryRepo qnaHistoryRepo = MyBeanUtils.getBean(QnaHistoryRepo.class);
        InquerysEntity inquerys = (InquerysEntity) o;

        QnaHistoryEntity qnaHistory = new QnaHistoryEntity();
        qnaHistory.setInqueryId(inquerys.getId());
        qnaHistory.setUserId(inquerys.getUserId());
        qnaHistory.setCounselorId(inquerys.getCounselorId());
        if(inquerys.getAnswersList() == null || inquerys.getAnswersList().size() == 0)
            qnaHistory.setAnswerId(null);
        else
            qnaHistory.setAnswerId(inquerys.getAnswersList().get(0).getId());
        qnaHistory.setIsAnswered(inquerys.getIsAnswered());

        qnaHistory.setSavedArea("INQUERYS");

        qnaHistoryRepo.save(qnaHistory);
    }

}
