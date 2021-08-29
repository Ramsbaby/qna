package com.ramsbaby.qna.qnaMgmt.service.customer;

import com.ramsbaby.qna.advice.customException.CInqueryIdIsNotExistException;
import com.ramsbaby.qna.qnaMgmt.entity.InquerysEntity;
import com.ramsbaby.qna.qnaMgmt.model.InqueryModel;
import com.ramsbaby.qna.qnaMgmt.repository.InquerysRepo;
import com.ramsbaby.qna.qnaMgmt.service.counselor.CounselorService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

/**
 * @author : RAMSBABY
 * @date : 2021-08-28 오후 10:35
 */
@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class CustomerServiceTest {
    @Autowired
    CustomerService customerService;
    @Autowired
    CounselorService counselorService;
    @Autowired
    InquerysRepo inquerysRepo;

    @Test
    @DisplayName("고객 - 문의 등록 성공")
    void 고객_문의_등록_성공() {
        String userId = "jackson";
        InquerysEntity inquery = insertInquery(userId);
        Assertions.assertTrue(InqueryModel.of(inquerysRepo.save(inquery)).getId() > 0);
    }

    @Test
    @DisplayName("고객 - 본인이 등록한 문의글 전체확인 성공")
    void 고객_본인이_등록한_문의글_전체확인_성공() {
        String userId = "babyrams";
        InquerysEntity inquery = insertInquery(userId);
        inquerysRepo.save(inquery);

        inquery = insertInquery(userId);
        inquerysRepo.save(inquery);

        List<InqueryModel> resultModel = customerService.getAllMyInquerys(userId);
        Assertions.assertEquals(resultModel.size(), 2);
    }

    @Test
    @DisplayName("고객 - 본인이 등록한 문의글 전체확인 실패")
    void 고객_본인이_등록한_문의글_전체확인_문의글없음_실패() {
        String userId = "babyrams";
        String userId2 = "babyrams22";
        InquerysEntity inquery = insertInquery(userId);
        inquerysRepo.save(inquery);

        inquery = insertInquery(userId);
        inquerysRepo.save(inquery);

        //다른 ID로 검색
        Throwable customException = assertThrows(CInqueryIdIsNotExistException.class, () -> customerService.getAllMyInquerys(userId2));
        assertEquals(customException.getMessage(), "INQUERY_ID_IS_NOT_EXIST");
    }

    //질문 등록 하기
    InquerysEntity insertInquery(String userId) {
        InqueryModel inqueryModel = InqueryModel.builder()
                .userId(userId)
                .title("왜 안될까요?")
                .content("안돼요")
                .build();
        return InquerysEntity.create(inqueryModel);
    }
}
