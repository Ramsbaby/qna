package com.ramsbaby.qna.qnaMgmt.repository;

import com.ramsbaby.qna.qnaMgmt.entity.AnswersEntity;
import com.ramsbaby.qna.qnaMgmt.entity.InquerysEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnswersRepo extends JpaRepository<AnswersEntity, Long> {
    Optional<AnswersEntity> findByInquerys(InquerysEntity inquery);
}
