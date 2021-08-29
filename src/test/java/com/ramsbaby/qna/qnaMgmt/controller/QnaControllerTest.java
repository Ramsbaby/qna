package com.ramsbaby.qna.qnaMgmt.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ramsbaby.qna.qnaMgmt.model.AnswerModel;
import com.ramsbaby.qna.qnaMgmt.model.InqueryModel;
import com.ramsbaby.qna.qnaMgmt.model.UserModel;
import com.ramsbaby.qna.qnaMgmt.service.counselor.CounselorServiceImpl;
import com.ramsbaby.qna.qnaMgmt.service.customer.CustomerServiceImpl;
import com.ramsbaby.qna.qnaMgmt.support.Base64Util;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.restdocs.RestDocumentationExtension;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static com.ramsbaby.qna.qnaMgmt.ApiDocumentUtil.getDocumentRequest;
import static com.ramsbaby.qna.qnaMgmt.ApiDocumentUtil.getDocumentResponse;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.requestHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * @author : RAMSBABY
 * @date : 2021-08-28 오후 5:15
 */

@ExtendWith({RestDocumentationExtension.class, SpringExtension.class})
@SpringBootTest
@AutoConfigureMockMvc
@Transactional
@AutoConfigureRestDocs
public class QnaControllerTest {
    private static final String X_USER_ID = "X-USER-ID";
    private static final String COUNSELOR_ID = "ramsbaby";//상담사
    private static final String USER_ID = "customer1";//고객
    private static final String COUNSELOR_PASSWORD = "test1234";//상담사비밀번호

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private CounselorServiceImpl counselorService;

    @Autowired
    private CustomerServiceImpl customerService;

    @Autowired
    private ObjectMapper objectMapper;

    @PersistenceContext    // EntityManagerFactory가 DI 할 수 있도록 어노테이션 설정
    private EntityManager entityManager;

    @BeforeEach
    public void setUp() throws Exception {
        //id:ramsbaby, name:이정우, password:test1234, role:C 인 상담사가 가입을 한 상태
        UserModel userModel = UserModel.builder().id(COUNSELOR_ID).name("이정우").password(Base64Util.setStrToEncode("test1234")).role("C").build();
        counselorService.saveUser(userModel);

        //id:customer1 유저가 문의글을 작성한 상태
        InqueryModel inquery = InqueryModel.builder().userId(USER_ID).title("질문").content("내용").build();
        customerService.saveInquery(inquery);

    }

    @Test
    @DisplayName("고객 - 문의글등록")
    void addInquery() throws Exception {
        // given

        // when
        // 유저ID 'test1'고객이 문의글 등록하는 경우
        ResultActions resultActions = mockMvc.perform(RestDocumentationRequestBuilders
                .post("/api/inquery")
                .header("Content-Type", "application/json")
                .content("{\"userId\":\"test123\",\"title\":\"testTitle1\",\"content\":\"testContent1\"}"))
                .andDo(MockMvcResultHandlers.print());

        // then
        resultActions
                .andExpect(status().isOk())
                .andDo(document(
                        "addInquery",
                        getDocumentRequest(),
                        getDocumentResponse(),
                        requestFields(
                                fieldWithPath("userId").type(JsonFieldType.STRING).description("사용자 ID"),
                                fieldWithPath("title").type(JsonFieldType.STRING).description("문의글 제목"),
                                fieldWithPath("content").type(JsonFieldType.STRING).description("문의글 내용")
                        ),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("성공유무"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("에러내용"),
                                fieldWithPath("response.id").type(JsonFieldType.NUMBER).description("SEQUENCE"),
                                fieldWithPath("response.userId").type(JsonFieldType.STRING).description("사용자 ID"),
                                fieldWithPath("response.title").type(JsonFieldType.STRING).description("문의글 제목"),
                                fieldWithPath("response.content").type(JsonFieldType.STRING).description("문의글 내용"),
                                fieldWithPath("response.counselorId").type(JsonFieldType.NULL).description("지정상담사 ID"),
                                fieldWithPath("response.isAnswered").type(JsonFieldType.STRING).description("상담사 답변 여부"),
                                fieldWithPath("response.createdAt").type(JsonFieldType.STRING).description("생성일"),
                                fieldWithPath("response.updatedAt").type(JsonFieldType.STRING).description("수정일")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("고객 - 본인 문의글 전체 확인")
    void getAllMyInquerys() throws Exception {
        // given

        // when
        // 유저ID 'test1'고객이 문의글 등록하는 경우
        ResultActions resultActions = mockMvc.perform(RestDocumentationRequestBuilders
                .get("/api/myInquerys")
                .header(X_USER_ID, COUNSELOR_ID)
                .header("Content-Type", "application/json"))
                .andDo(MockMvcResultHandlers.print());

        // then
        resultActions
                .andExpect(status().isOk())
                .andDo(document(
                        "getAllInquerys",
                        getDocumentRequest(),
                        getDocumentResponse(),
                        requestHeaders(
                                headerWithName(X_USER_ID).description("사용자 ID")
                        ),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("성공유무"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("에러내용"),
                                fieldWithPath("response[].id").type(JsonFieldType.NUMBER).description("SEQUENCE"),
                                fieldWithPath("response[].userId").type(JsonFieldType.STRING).description("사용자 ID"),
                                fieldWithPath("response[].title").type(JsonFieldType.STRING).description("문의글 제목"),
                                fieldWithPath("response[].content").type(JsonFieldType.STRING).description("문의글 내용"),
                                fieldWithPath("response[].counselorId").type(JsonFieldType.NULL).description("지정상담사 ID"),
                                fieldWithPath("response[].isAnswered").type(JsonFieldType.STRING).description("상담사 답변 여부"),
                                fieldWithPath("response[].createdAt").type(JsonFieldType.STRING).description("생성일"),
                                fieldWithPath("response[].updatedAt").type(JsonFieldType.STRING).description("수정일")
                        )
                ))
        ;
    }


    @Test
    @DisplayName("상담사 - 회원가입")
    void addUser() throws Exception {
        // given
        //id:ramsbaby, name:이정우, password:test1234, role:C 인 상담사가 가입을 한 상태

        // when
        // 유저ID 'ramsbaby3' 상담사가 회원가입하는 경우
        ResultActions resultActions = mockMvc.perform(RestDocumentationRequestBuilders
                .post("/api/user")
                .header("Content-Type", "application/json")
                .content("{\"id\":\"ramsbaby3\",\"name\":\"testname\",\"role\":\"N\",\"password\":\"test1234\"}"))
                .andDo(MockMvcResultHandlers.print());

        // then
        resultActions
                .andExpect(status().isOk())
                .andDo(document(
                        "addUser",
                        getDocumentRequest(),
                        getDocumentResponse(),
                        requestFields(
                                fieldWithPath("id").type(JsonFieldType.STRING).description("사용자 ID"),
                                fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                                fieldWithPath("role").type(JsonFieldType.STRING).description("역할('N':일반사용자, 'C':상담사)"),
                                fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호")
                        ),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("성공유무"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("에러내용"),
                                fieldWithPath("response.id").type(JsonFieldType.STRING).description("사용자 ID"),
                                fieldWithPath("response.name").type(JsonFieldType.STRING).description("이름"),
                                fieldWithPath("response.role").type(JsonFieldType.STRING).description("역할('N':일반사용자, 'C':상담사)"),
                                fieldWithPath("response.password").type(JsonFieldType.STRING).description("비밀번호")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("상담사 - 로그인")
    void loginUser() throws Exception {
        // given
        //id:ramsbaby, name:이정우, password:test1234, role:C 인 상담사가 가입을 한 상태

        // when
        // 유저ID 'ramsbaby' 상담사가 로그인하는 경우
        ResultActions resultActions = mockMvc.perform(RestDocumentationRequestBuilders
                .post("/api/userLogin")
                .header("Content-Type", "application/json")
                .content("{\"id\":\"" + COUNSELOR_ID + "\",\"password\":\"" + COUNSELOR_PASSWORD + "\"}"))
                .andDo(MockMvcResultHandlers.print());

        // then
        resultActions
                .andExpect(status().isOk())
                .andDo(document(
                        "loginUser",
                        getDocumentRequest(),
                        getDocumentResponse(),
                        requestFields(
                                fieldWithPath("id").type(JsonFieldType.STRING).description("사용자 ID"),
                                fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호")
                        ),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("성공유무"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("에러내용"),
                                fieldWithPath("response.id").type(JsonFieldType.STRING).description("사용자 ID"),
                                fieldWithPath("response.name").type(JsonFieldType.STRING).description("이름"),
                                fieldWithPath("response.role").type(JsonFieldType.STRING).description("역할('N':일반사용자, 'C':상담사)"),
                                fieldWithPath("response.password").type(JsonFieldType.STRING).description("비밀번호")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("상담사 - 문의글 전체 확인")
    void getAllInquerys() throws Exception {
        // given

        // when
        // 유저ID 'ramsbaby'고객이 로그인하는 경우
        ResultActions resultActions = mockMvc.perform(RestDocumentationRequestBuilders
                .get("/api/inquerys")
                .header("Content-Type", "application/json"))
                .andDo(MockMvcResultHandlers.print());

        // then
        resultActions
                .andExpect(status().isOk())
                .andDo(document(
                        "getAllInquerys",
                        getDocumentRequest(),
                        getDocumentResponse(),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("성공유무"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("에러내용"),
                                fieldWithPath("response[].id").type(JsonFieldType.NUMBER).description("SEQUENCE"),
                                fieldWithPath("response[].userId").type(JsonFieldType.STRING).description("사용자 ID"),
                                fieldWithPath("response[].title").type(JsonFieldType.STRING).description("문의글 제목"),
                                fieldWithPath("response[].content").type(JsonFieldType.STRING).description("문의글 내용"),
                                fieldWithPath("response[].counselorId").type(JsonFieldType.NULL).description("지정상담사 ID"),
                                fieldWithPath("response[].isAnswered").type(JsonFieldType.STRING).description("상담사 답변 여부"),
                                fieldWithPath("response[].createdAt").type(JsonFieldType.STRING).description("생성일"),
                                fieldWithPath("response[].updatedAt").type(JsonFieldType.STRING).description("수정일")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("상담사 - 문의글 - 본인으로 지정")
    void choiceInquery() throws Exception {
        // given
        //id:customer1 유저가 문의글을 작성한 상태
        InqueryModel inquery = customerService.getAllMyInquerys(USER_ID).get(0);

        // when
        // 유저ID 'ramsbaby' 상담사가 선택
        ResultActions resultActions = mockMvc.perform(RestDocumentationRequestBuilders
                .patch("/api/inqueryChoice/{inqueryId}", inquery.getId())
                .header(X_USER_ID, COUNSELOR_ID)
                .header("Content-Type", "application/json"))
                .andDo(MockMvcResultHandlers.print());

        // then
        resultActions
                .andExpect(status().isOk())
                .andDo(document(
                        "choiceInquery",
                        getDocumentRequest(),
                        getDocumentResponse(),
                        requestHeaders(
                                headerWithName(X_USER_ID).description("사용자 ID")
                        ),
                        pathParameters(parameterWithName("inqueryId").description("문의글 번호")),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("성공유무"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("에러내용"),
                                fieldWithPath("response").type(JsonFieldType.BOOLEAN).description("요청상태")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("상담사 - 문의글 - 답변등록")
    void addAnswers() throws Exception {
        // given
        //id:customer1 유저가 문의글을 작성한 상태
        //상담사1이 본인 답변글로 지정.
        InqueryModel inquery = customerService.getAllMyInquerys(USER_ID).get(0);
        counselorService.updateInquery(COUNSELOR_ID, inquery.getId());

        // when
        // 유저ID 'ramsbaby' 상담사가 선택
        ResultActions resultActions = mockMvc.perform(RestDocumentationRequestBuilders
                .post("/api/answers")
                .header(X_USER_ID, COUNSELOR_ID)
                .header("Content-Type", "application/json")
                .content("{\"inqueryId\":" + inquery.getId() + ",\"counselorId\":\"" + COUNSELOR_ID + "\",\"title\":\"testTitle\",\"content\":\"testContent\"}"))
                .andDo(MockMvcResultHandlers.print());

        // then
        resultActions
                .andExpect(status().isOk())
                .andDo(document(
                        "addAnswers",
                        getDocumentRequest(),
                        getDocumentResponse(),
                        requestHeaders(
                                headerWithName(X_USER_ID).description("사용자 ID")
                        ),
                        requestFields(
                                fieldWithPath("inqueryId").type(JsonFieldType.NUMBER).description("문의글 번호"),
                                fieldWithPath("counselorId").type(JsonFieldType.STRING).description("상담사 ID"),
                                fieldWithPath("title").type(JsonFieldType.STRING).description("답변 제목"),
                                fieldWithPath("content").type(JsonFieldType.STRING).description("답변 내용")
                        ),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("성공유무"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("에러내용"),
                                fieldWithPath("response.inqueryId").type(JsonFieldType.NUMBER).description("문의글 번호"),
                                fieldWithPath("response.counselorId").type(JsonFieldType.STRING).description("상담사 ID"),
                                fieldWithPath("response.title").type(JsonFieldType.STRING).description("답변 제목"),
                                fieldWithPath("response.content").type(JsonFieldType.STRING).description("답변 내용"),
                                fieldWithPath("response.createdAt").type(JsonFieldType.STRING).description("생성일"),
                                fieldWithPath("response.updatedAt").type(JsonFieldType.STRING).description("수정일")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("고객 - 상담사 답변 확인")
    void getMyAnswer() throws Exception {
        // given
        //id:customer1 유저가 문의글을 작성한 상태
        InqueryModel inquery = customerService.getAllMyInquerys(USER_ID).get(0);
        //상담사1이 본인 답변글로 지정.
        counselorService.updateInquery(COUNSELOR_ID, inquery.getId());
        //상담사1이 답변 등록
        AnswerModel answer = AnswerModel.builder().inqueryId(inquery.getId()).counselorId(COUNSELOR_ID).title("답변1").content("내용1").build();
        counselorService.saveAnswers(COUNSELOR_ID, answer);

        // when
        // 상담사ID 'ramsbaby' 답변확인
        ResultActions resultActions = mockMvc.perform(RestDocumentationRequestBuilders
                .get("/api/myAnswer/{inqueryId}", inquery.getId())
                .header(X_USER_ID, COUNSELOR_ID)
                .header("Content-Type", "application/json"))
                .andDo(MockMvcResultHandlers.print());

        // then
        resultActions
                .andExpect(status().isOk())
                .andDo(document(
                        "getMyAnswer",
                        getDocumentRequest(),
                        getDocumentResponse(),
                        requestHeaders(
                                headerWithName(X_USER_ID).description("사용자 ID")
                        ),
                        pathParameters(parameterWithName("inqueryId").description("문의글 번호")),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("성공유무"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("에러내용"),
                                fieldWithPath("response.inqueryId").type(JsonFieldType.NUMBER).description("문의글 번호"),
                                fieldWithPath("response.counselorId").type(JsonFieldType.STRING).description("상담사 ID"),
                                fieldWithPath("response.title").type(JsonFieldType.STRING).description("답변 제목"),
                                fieldWithPath("response.content").type(JsonFieldType.STRING).description("답변 내용"),
                                fieldWithPath("response.createdAt").type(JsonFieldType.STRING).description("생성일"),
                                fieldWithPath("response.updatedAt").type(JsonFieldType.STRING).description("수정일")
                        )
                ))
        ;
    }
}
