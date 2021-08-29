package com.ramsbaby.qna.qnaMgmt.entity.common;

import com.ramsbaby.qna.qnaMgmt.entity.listener.Auditable;
import com.ramsbaby.qna.qnaMgmt.entity.listener.MyEntitiyListener;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 10:25
 */
@Data
@MappedSuperclass
@EntityListeners(value = {AuditingEntityListener.class, MyEntitiyListener.class})
public class CommonEntity implements Auditable {
    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
