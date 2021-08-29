package com.ramsbaby.qna.qnaMgmt.model;

import com.ramsbaby.qna.qnaMgmt.entity.AnswersEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class AnswerModel {

    //문의 번호
    private long inqueryId;

    //상담사 이름
    private String counselorId;

    //제목
    private String title;

    //내용
    private String content;


    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;


    //답변객체 생성
    public static AnswerModel of(AnswersEntity answer, Long inqueryId, String counselorId) {
        return AnswerModel.builder()
                .inqueryId(inqueryId)
                .title(answer.getTitle())
                .content(answer.getContent())
                .counselorId(counselorId)
                .createdAt(answer.getCreatedAt())
                .updatedAt(answer.getUpdatedAt())
                .build();
    }
}
