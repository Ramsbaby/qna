package com.ramsbaby.qna.qnaMgmt.entity.listener;

import java.time.LocalDateTime;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 10:20
 */
public interface Auditable {
    LocalDateTime getCreatedAt();

    void setCreatedAt(LocalDateTime createdAt);

    LocalDateTime getUpdatedAt();

    void setUpdatedAt(LocalDateTime updatedAt);
}
