package com.ramsbaby.qna.qnaMgmt.entity;

import com.ramsbaby.qna.qnaMgmt.entity.common.CommonEntity;
import com.ramsbaby.qna.qnaMgmt.entity.listener.MyEntitiyListener;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;


/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 9:22
 */
@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "qna_history")
@EqualsAndHashCode(callSuper = true)
@EntityListeners(value = {MyEntitiyListener.class, AuditingEntityListener.class})
public class QnaHistoryEntity extends CommonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long inqueryId;

    private Long answerId;

    private String userId;

    private String counselorId;

    private String isAnswered;

    private String savedArea;
}
