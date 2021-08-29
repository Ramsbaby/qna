package com.ramsbaby.qna.qnaMgmt.repository;

import com.ramsbaby.qna.qnaMgmt.entity.InquerysEntity;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.stereotype.Repository;

import javax.persistence.LockModeType;
import java.util.List;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 8:40
 */
@Repository
public interface InquerysRepo extends JpaRepository<InquerysEntity, Long> {
    List<InquerysEntity> findAllByUserId(String userId, Sort createdAt);

    List<InquerysEntity> findAllByIsAnswered(String isAnswered, Sort createdAt);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    InquerysEntity findById(String id);
}
