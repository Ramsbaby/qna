package com.ramsbaby.qna.qnaMgmt.model;

import com.ramsbaby.qna.qnaMgmt.entity.InquerysEntity;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

import static java.util.stream.Collectors.toList;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 10:20
 */
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class InqueryModel {
    private Long id;

    //문의고객 ID
    private String userId;

    //문의 제목
    private String title;

    //문의 내용
    private String content;

    //상담사 ID
    private String counselorId;

    //상담사 답변여부
    private String isAnswered;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public InqueryModel(Long id, String userId, String title, String content, String counselorId, String isAnswered) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.counselorId = counselorId;
        this.isAnswered = isAnswered;
    }

    public static InqueryModel setEntity(InquerysEntity inquery) {
        return InqueryModel.builder()
                .id(inquery.getId())
                .userId(inquery.getUserId())
                .title(inquery.getTitle())
                .content(inquery.getContent())
                .counselorId(inquery.getCounselorId())
                .isAnswered(inquery.getIsAnswered())
                .createdAt(inquery.getCreatedAt())
                .updatedAt(inquery.getUpdatedAt())
                .build();
    }


    public static List<InqueryModel> setEntityList(List<InquerysEntity> inquery) {
        return inquery.stream().map(InqueryModel::setEntity).collect(toList());
    }


    //문의객체 생성
    public static InqueryModel of(InquerysEntity inquery) {
        return InqueryModel.builder()
                .id(inquery.getId())
                .userId(inquery.getUserId())
                .title(inquery.getTitle())
                .content(inquery.getContent())
                .counselorId(inquery.getCounselorId())
                .isAnswered(inquery.getIsAnswered())
                .createdAt(inquery.getCreatedAt())
                .updatedAt(inquery.getUpdatedAt())
                .build();
    }
}
