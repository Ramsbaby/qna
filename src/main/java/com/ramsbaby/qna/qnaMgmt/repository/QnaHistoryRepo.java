package com.ramsbaby.qna.qnaMgmt.repository;

import com.ramsbaby.qna.qnaMgmt.entity.QnaHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : RAMSBABY
 * @date : 2021-08-29 오전 2:09
 */
public interface QnaHistoryRepo extends JpaRepository<QnaHistoryEntity, Long> {
}
