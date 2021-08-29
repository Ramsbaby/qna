package com.ramsbaby.qna.qnaMgmt.model;

import com.ramsbaby.qna.qnaMgmt.entity.QnaHistoryEntity;
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
@NoArgsConstructor
@AllArgsConstructor
public class QnaHistoryModel {
    private Long id;

    private Long inqueryId;

    private Long answerId;

    private String userId;

    private String counselorId;

    private String isAnswered;

    private String savedArea;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public static List<QnaHistoryModel> setEntityList(List<QnaHistoryEntity> inquery) {
        return inquery.stream().map(QnaHistoryModel::setEntity).collect(toList());
    }

    public static QnaHistoryModel setEntity(QnaHistoryEntity qnaHistory) {
        return QnaHistoryModel.builder()
                .id(qnaHistory.getId())
                .inqueryId(qnaHistory.getInqueryId())
                .answerId(qnaHistory.getAnswerId())
                .userId(qnaHistory.getUserId())
                .counselorId(qnaHistory.getCounselorId())
                .isAnswered(qnaHistory.getIsAnswered())
                .createdAt(qnaHistory.getCreatedAt())
                .updatedAt(qnaHistory.getUpdatedAt())
                .build();
    }
}
