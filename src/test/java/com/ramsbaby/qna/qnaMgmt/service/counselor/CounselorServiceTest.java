package com.ramsbaby.qna.qnaMgmt.service.counselor;

import com.ramsbaby.qna.advice.customException.CCounselorIdExistException;
import com.ramsbaby.qna.advice.customException.CCounselorIdNotMatcheException;
import com.ramsbaby.qna.advice.customException.CInqueryIdIsNotExistException;
import com.ramsbaby.qna.qnaMgmt.entity.InquerysEntity;
import com.ramsbaby.qna.qnaMgmt.model.AnswerModel;
import com.ramsbaby.qna.qnaMgmt.model.InqueryModel;
import com.ramsbaby.qna.qnaMgmt.model.UserModel;
import com.ramsbaby.qna.qnaMgmt.repository.InquerysRepo;
import com.ramsbaby.qna.qnaMgmt.support.Base64Util;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

/**
 * @author : RAMSBABY
 * @date : 2021-08-28 오후 10:34
 */
@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class CounselorServiceTest {

    @Autowired
    private CounselorServiceImpl counselorService;

    @Autowired
    private InquerysRepo inquerysRepo;

    @Autowired
    private MessageSource messageSource;

    @Test
    @DisplayName("상담사 - 회원가입 성공")
    void 상담사_회원가입_성공() {
        String id = "jisikKing";

        UserModel resultModel = signUp(id);
        Assertions.assertEquals(id, resultModel.getId());
    }

    @Test
    @DisplayName("상담사 - 회원가입 실패")
    void 상담사_회원가입_중복ID존재_실패() {
        String id = "jisikKing";
        signUp(id);

        //동일 ID로 재가입
        Throwable customException = assertThrows(CCounselorIdExistException.class, () -> signUp(id));
        assertEquals(customException.getMessage(), "COUNSELOR_ID_EXIST");
    }

    @Test
    @DisplayName("상담사 - 문의 목록 전체 확인 성공")
    void 상담사_문의_목록_전체_확인_성공() {
        String userId = "jackson";
        InquerysEntity inquery = insertInquery(userId);
        inquerysRepo.save(inquery);

        userId = "jackson2";
        inquery = insertInquery(userId);
        inquerysRepo.save(inquery);

        List<InqueryModel> list = counselorService.getAllInquerys();
        Assertions.assertTrue(list.size() > 1);
    }

    @Test
    @DisplayName("상담사 - 문의글 본인으로 지정 성공")
    void 상담사_문의글_본인지정_성공() {
        String counsId = "sangDamWang";
        Optional<InquerysEntity> result = choiceInquery(counsId);
        Assertions.assertEquals(counsId, result.get().getCounselorId());
    }

    @Test
    @DisplayName("상담사 - 문의글 본인으로 지정 실패")
    void 상담사_문의글_본인지정_다른상담사지정문의글_실패() {
        //id:ramsbaby, name:이정우, password:test1234, role:C 인 상담사가 가입을 한 상태
        String counsId = "sangDamWang";
        String counsId2 = "sangDamWang2";

        String userId = "jackson";
        InquerysEntity inquery = insertInquery(userId);
        inquerysRepo.save(inquery);

        counselorService.updateInquery(counsId, inquery.getId());

        //다른 ID로 재지정
        Throwable customException = assertThrows(CCounselorIdExistException.class, () -> counselorService.updateInquery(counsId2, inquery.getId()));
        assertEquals(customException.getMessage(), "COUNSELOR_ID_EXIST");
    }

    @Test
    @DisplayName("상담사 - 문의글 본인으로 지정 실패2")
    void 상담사_문의글_본인지정_문의글없음_실패() {
        //id:ramsbaby, name:이정우, password:test1234, role:C 인 상담사가 가입을 한 상태
        String counsId = "sangDamWang";

        String userId = "jackson";
        InquerysEntity inquery = insertInquery(userId);
        inquerysRepo.save(inquery);

        //다른 ID로 재지정
        Throwable customException = assertThrows(CInqueryIdIsNotExistException.class, () -> counselorService.updateInquery(counsId, 10000000000L));
        assertEquals(customException.getMessage(), "INQUERY_ID_IS_NOT_EXIST");
    }

    @Test
    @DisplayName("상담사 - 답변등록 성공")
    void 상담사_답변_등록_성공() {
        String counsId = "sangDamWang";
        signUp(counsId);
        Optional<InquerysEntity> result = choiceInquery(counsId);

        AnswerModel answersModel = AnswerModel.builder()
                .inqueryId(result.get().getId())
                .counselorId(counsId)
                .title("답변드려요")
                .content("이렇게 해보셔요...")
                .build();
        counselorService.saveAnswers(counsId, answersModel);

        Optional<InquerysEntity> inqueryResult = inquerysRepo.findById(result.get().getId());
        Assertions.assertEquals(inqueryResult.get().getIsAnswered(), "Y");
    }

    @Test
    @DisplayName("상담사 - 답변등록 실패")
    void 상담사_답변_등록_지정상담사본인아님_실패() {
        String counsId = "sangDamWang";
        String counsId2 = "sangDamWang2";
        signUp(counsId);
        Optional<InquerysEntity> result = choiceInquery(counsId);

        AnswerModel answersModel = AnswerModel.builder()
                .inqueryId(result.get().getId())
                .counselorId(counsId)
                .title("답변드려요")
                .content("이렇게 해보셔요...")
                .build();

        //다른 ID로 재지정
        Throwable customException = assertThrows(CCounselorIdNotMatcheException.class, () -> counselorService.saveAnswers(counsId2, answersModel));
        assertEquals(customException.getMessage(), "COUNSELOR_ID_NOT_MATCHE");
    }

    @Test
    @DisplayName("상담사 - 답변등록 실패2")
    void 상담사_답변_등록_문의글다름_실패() {
        String counsId = "sangDamWang";
        signUp(counsId);
        Optional<InquerysEntity> result = choiceInquery(counsId);

        AnswerModel answersModel = AnswerModel.builder()
                .inqueryId(result.get().getId())
                .counselorId(counsId)
                .title("답변드려요")
                .content("이렇게 해보셔요...")
                .build();

        //다른 문의글ID로 재지정
        answersModel.setInqueryId(10000000L);

        Throwable customException = assertThrows(CInqueryIdIsNotExistException.class,
                () -> counselorService.saveAnswers(counsId, answersModel));
        assertEquals(customException.getMessage(), "INQUERY_ID_IS_NOT_EXIST");
    }

    @Test
    @DisplayName("상담사 - 답변등록 실패3")
    void 상담사_답변_등록_지정상담사없음_실패() {
        String counsId = "sangDamWang";
        signUp(counsId);
        Optional<InquerysEntity> result = choiceInquery(counsId);

        AnswerModel answersModel = AnswerModel.builder()
                .inqueryId(result.get().getId())
                .counselorId(counsId)
                .title("답변드려요")
                .content("이렇게 해보셔요...")
                .build();

        result.get().setCounselorId(null);
        inquerysRepo.save(result.get());

        //지정상담사 없앰.
        answersModel.setCounselorId(null);

        Throwable customException = assertThrows(CCounselorIdNotMatcheException.class,
                () -> counselorService.saveAnswers(counsId, answersModel));
        assertEquals(customException.getMessage(), "COUNSELOR_ID_NOT_MATCHE");
    }

    //질문 등록 후 상담사 지정하기
    Optional<InquerysEntity> choiceInquery(String counsId) {
        String userId = "jackson";
        InquerysEntity inquery = insertInquery(userId);
        inquerysRepo.save(inquery);

        counselorService.updateInquery(counsId, inquery.getId());

        return inquerysRepo.findById(inquery.getId());
    }

    //상담사 회원가입
    UserModel signUp(String counsId) {
        String name = "상담사";
        String role = "C";
        String passWord = "test1234";

        UserModel userModel = UserModel.builder()
                .id(counsId)
                .name(name)
                .role(role)
                .password(Base64Util.setStrToEncode(passWord))
                .build();
        return counselorService.saveUser(userModel);
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

    // code정보에 해당하는 메시지를 조회합니다.
    private String getMessage(String code) {
        return getMessage(code, null);
    }

    // code정보, 추가 argument로 현재 locale에 맞는 메시지를 조회합니다.
    private String getMessage(String code, Object[] args) {
        return messageSource.getMessage(code, args, LocaleContextHolder.getLocale());
    }
}
