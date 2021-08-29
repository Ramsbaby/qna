package com.ramsbaby.qna.qnaMgmt.entity;

import com.ramsbaby.qna.qnaMgmt.entity.common.CommonEntity;
import com.ramsbaby.qna.qnaMgmt.entity.listener.MyEntitiyListener;
import com.ramsbaby.qna.qnaMgmt.model.UserModel;
import com.ramsbaby.qna.qnaMgmt.support.Base64Util;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Base64;
import java.util.List;


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
@Table(name = "users")
@EqualsAndHashCode(callSuper = true)
@EntityListeners(value = {MyEntitiyListener.class, AuditingEntityListener.class})
public class UserEntity extends CommonEntity {

    @Id
    private String id;

    private String name;

    private String role;

    private String password;

    @OneToMany(mappedBy = "users")
    List<AnswersEntity> answersList;

    public UserEntity(String id, String name, String role, String password) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.password = password;
    }

    public static UserEntity create(UserModel userModel) {
        return new UserEntity(userModel.getId(), userModel.getName(), userModel.getRole(), userModel.getPassword());
    }
}
