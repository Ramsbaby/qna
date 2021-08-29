package com.ramsbaby.qna.qnaMgmt.model;

import com.ramsbaby.qna.qnaMgmt.entity.UserEntity;
import com.ramsbaby.qna.qnaMgmt.support.Base64Util;
import lombok.*;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 10:20
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode()
public class UserModel {
    //유저 ID
    private String id;

    //유저 이름
    private String name;

    //유저 권한 - N:일반, C:상담사
    private String role;

    //패스워드
    private String password;

    //유저객체생성
    public static UserModel of(UserEntity user) {
        return new UserModel(user.getId(), user.getName(), user.getRole(), user.getPassword());
    }

    public void setPassword(String password) {
        this.password = Base64Util.setStrToEncode(password);
    }
}
