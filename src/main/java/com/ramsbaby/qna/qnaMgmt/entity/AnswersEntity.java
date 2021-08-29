package com.ramsbaby.qna.qnaMgmt.entity;

import com.ramsbaby.qna.qnaMgmt.entity.common.CommonEntity;
import com.ramsbaby.qna.qnaMgmt.entity.listener.MyEntitiyListener;
import com.ramsbaby.qna.qnaMgmt.entity.listener.QnaHistoryAnswersListener;
import com.ramsbaby.qna.qnaMgmt.model.AnswerModel;
import lombok.*;

import javax.persistence.*;


@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "answers")
@EqualsAndHashCode(callSuper = true)
@EntityListeners(value = {MyEntitiyListener.class, QnaHistoryAnswersListener.class})
public class AnswersEntity extends CommonEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquery_id", nullable = false)
    InquerysEntity inquerys;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "counselor_id", nullable = false)
    UserEntity users;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String content;

    public AnswersEntity(String title, String content, InquerysEntity inquerys, UserEntity users) {
        this.title = title;
        this.content = content;
        this.inquerys = inquerys;
        this.users = users;
    }

    public static AnswersEntity create(AnswerModel answerModel, InquerysEntity inquerys, UserEntity users) {
        return new AnswersEntity(answerModel.getTitle(), answerModel.getContent(), inquerys, users);
    }
}
