package com.ramsbaby.qna.qnaMgmt.repository;

import com.ramsbaby.qna.qnaMgmt.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 8:35
 */
@Repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findById(String userId);

    Optional<UserEntity> findByIdAndPassword(String id, String password);
}
