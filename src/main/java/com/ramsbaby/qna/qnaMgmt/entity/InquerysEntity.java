package com.ramsbaby.qna.qnaMgmt.entity;

import com.ramsbaby.qna.qnaMgmt.entity.common.CommonEntity;
import com.ramsbaby.qna.qnaMgmt.entity.listener.MyEntitiyListener;
import com.ramsbaby.qna.qnaMgmt.entity.listener.QnaHistoryInquerysListener;
import com.ramsbaby.qna.qnaMgmt.model.InqueryModel;
import lombok.*;

import javax.persistence.*;
import java.util.List;


/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 9:47
 */
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "inquerys")
@EqualsAndHashCode(callSuper = true)
@EntityListeners(value = {MyEntitiyListener.class, QnaHistoryInquerysListener.class})
public class InquerysEntity extends CommonEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String userId;
    private String title;
    private String content;
    private String counselorId;

    @Column(name = "is_answered", length = 1, columnDefinition = "varchar(1)")
    private String isAnswered = "N";

    @OneToMany(mappedBy = "inquerys")
    List<AnswersEntity> answersList;

    //상담사ID 포함
    private InquerysEntity(String userId, String title, String content, String counselorId) {
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.counselorId = counselorId;
    }

    public static InquerysEntity create(InqueryModel inqueryModel) {
        return new InquerysEntity(inqueryModel.getUserId(), inqueryModel.getTitle(), inqueryModel.getContent(), inqueryModel.getCounselorId());
    }
}
