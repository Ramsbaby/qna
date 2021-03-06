package com.ramsbaby.qna.qnaMgmt.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ramsbaby.qna.qnaMgmt.model.AnswerModel;
import com.ramsbaby.qna.qnaMgmt.model.InqueryModel;
import com.ramsbaby.qna.qnaMgmt.model.UserModel;
import com.ramsbaby.qna.qnaMgmt.service.counselor.CounselorService;
import com.ramsbaby.qna.qnaMgmt.service.counselor.CounselorServiceImpl;
import com.ramsbaby.qna.qnaMgmt.service.customer.CustomerService;
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
 * @date : 2021-08-28 ?????? 5:15
 */

@ExtendWith({RestDocumentationExtension.class, SpringExtension.class})
@SpringBootTest
@AutoConfigureMockMvc
@Transactional
@AutoConfigureRestDocs
public class QnaControllerTest {
    private static final String X_USER_ID = "X-USER-ID";
    private static final String COUNSELOR_ID = "ramsbaby";//?????????
    private static final String USER_ID = "customer1";//??????
    private static final String COUNSELOR_PASSWORD = "test1234";//?????????????????????

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private CounselorService counselorService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private ObjectMapper objectMapper;

    @PersistenceContext    // EntityManagerFactory??? DI ??? ??? ????????? ??????????????? ??????
    private EntityManager entityManager;

    @BeforeEach
    public void setUp() throws Exception {
        //id:ramsbaby, name:?????????, password:test1234, role:C ??? ???????????? ????????? ??? ??????
        UserModel userModel = UserModel.builder().id(COUNSELOR_ID).name("?????????").password(Base64Util.setStrToEncode("test1234")).role("C").build();
        counselorService.saveUser(userModel);

        //id:customer1 ????????? ???????????? ????????? ??????
        InqueryModel inquery = InqueryModel.builder().userId(USER_ID).title("??????").content("??????").build();
        customerService.saveInquery(inquery);

    }

    @Test
    @DisplayName("?????? - ???????????????")
    void addInquery() throws Exception {
        // given

        // when
        // ??????ID 'test1'????????? ????????? ???????????? ??????
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
                                fieldWithPath("userId").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("title").type(JsonFieldType.STRING).description("????????? ??????"),
                                fieldWithPath("content").type(JsonFieldType.STRING).description("????????? ??????")
                        ),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("????????????"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("????????????"),
                                fieldWithPath("response.id").type(JsonFieldType.NUMBER).description("SEQUENCE"),
                                fieldWithPath("response.userId").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("response.title").type(JsonFieldType.STRING).description("????????? ??????"),
                                fieldWithPath("response.content").type(JsonFieldType.STRING).description("????????? ??????"),
                                fieldWithPath("response.counselorId").type(JsonFieldType.NULL).description("??????????????? ID"),
                                fieldWithPath("response.isAnswered").type(JsonFieldType.STRING).description("????????? ?????? ??????"),
                                fieldWithPath("response.createdAt").type(JsonFieldType.STRING).description("?????????"),
                                fieldWithPath("response.updatedAt").type(JsonFieldType.STRING).description("?????????")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("?????? - ?????? ????????? ?????? ??????")
    void getAllMyInquerys() throws Exception {
        // given

        // when
        // ??????ID 'test1'????????? ????????? ???????????? ??????
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
                                headerWithName(X_USER_ID).description("????????? ID")
                        ),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("????????????"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("????????????"),
                                fieldWithPath("response[].id").type(JsonFieldType.NUMBER).description("SEQUENCE"),
                                fieldWithPath("response[].userId").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("response[].title").type(JsonFieldType.STRING).description("????????? ??????"),
                                fieldWithPath("response[].content").type(JsonFieldType.STRING).description("????????? ??????"),
                                fieldWithPath("response[].counselorId").type(JsonFieldType.NULL).description("??????????????? ID"),
                                fieldWithPath("response[].isAnswered").type(JsonFieldType.STRING).description("????????? ?????? ??????"),
                                fieldWithPath("response[].createdAt").type(JsonFieldType.STRING).description("?????????"),
                                fieldWithPath("response[].updatedAt").type(JsonFieldType.STRING).description("?????????")
                        )
                ))
        ;
    }


    @Test
    @DisplayName("????????? - ????????????")
    void addUser() throws Exception {
        // given
        //id:ramsbaby, name:?????????, password:test1234, role:C ??? ???????????? ????????? ??? ??????

        // when
        // ??????ID 'ramsbaby3' ???????????? ?????????????????? ??????
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
                                fieldWithPath("id").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("name").type(JsonFieldType.STRING).description("??????"),
                                fieldWithPath("role").type(JsonFieldType.STRING).description("??????('N':???????????????, 'C':?????????)"),
                                fieldWithPath("password").type(JsonFieldType.STRING).description("????????????")
                        ),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("????????????"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("????????????"),
                                fieldWithPath("response.id").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("response.name").type(JsonFieldType.STRING).description("??????"),
                                fieldWithPath("response.role").type(JsonFieldType.STRING).description("??????('N':???????????????, 'C':?????????)"),
                                fieldWithPath("response.password").type(JsonFieldType.STRING).description("????????????")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("????????? - ?????????")
    void loginUser() throws Exception {
        // given
        //id:ramsbaby, name:?????????, password:test1234, role:C ??? ???????????? ????????? ??? ??????

        // when
        // ??????ID 'ramsbaby' ???????????? ??????????????? ??????
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
                                fieldWithPath("id").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("password").type(JsonFieldType.STRING).description("????????????")
                        ),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("????????????"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("????????????"),
                                fieldWithPath("response.id").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("response.name").type(JsonFieldType.STRING).description("??????"),
                                fieldWithPath("response.role").type(JsonFieldType.STRING).description("??????('N':???????????????, 'C':?????????)"),
                                fieldWithPath("response.password").type(JsonFieldType.STRING).description("????????????")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("????????? - ????????? ?????? ??????")
    void getAllInquerys() throws Exception {
        // given

        // when
        // ??????ID 'ramsbaby'????????? ??????????????? ??????
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
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("????????????"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("????????????"),
                                fieldWithPath("response[].id").type(JsonFieldType.NUMBER).description("SEQUENCE"),
                                fieldWithPath("response[].userId").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("response[].title").type(JsonFieldType.STRING).description("????????? ??????"),
                                fieldWithPath("response[].content").type(JsonFieldType.STRING).description("????????? ??????"),
                                fieldWithPath("response[].counselorId").type(JsonFieldType.NULL).description("??????????????? ID"),
                                fieldWithPath("response[].isAnswered").type(JsonFieldType.STRING).description("????????? ?????? ??????"),
                                fieldWithPath("response[].createdAt").type(JsonFieldType.STRING).description("?????????"),
                                fieldWithPath("response[].updatedAt").type(JsonFieldType.STRING).description("?????????")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("????????? - ????????? - ???????????? ??????")
    void choiceInquery() throws Exception {
        // given
        //id:customer1 ????????? ???????????? ????????? ??????
        InqueryModel inquery = customerService.getAllMyInquerys(USER_ID).get(0);

        // when
        // ??????ID 'ramsbaby' ???????????? ??????
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
                                headerWithName(X_USER_ID).description("????????? ID")
                        ),
                        pathParameters(parameterWithName("inqueryId").description("????????? ??????")),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("????????????"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("????????????"),
                                fieldWithPath("response").type(JsonFieldType.BOOLEAN).description("????????????")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("????????? - ????????? - ????????????")
    void addAnswers() throws Exception {
        // given
        //id:customer1 ????????? ???????????? ????????? ??????
        //?????????1??? ?????? ???????????? ??????.
        InqueryModel inquery = customerService.getAllMyInquerys(USER_ID).get(0);
        counselorService.updateInquery(COUNSELOR_ID, inquery.getId());

        // when
        // ??????ID 'ramsbaby' ???????????? ??????
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
                                headerWithName(X_USER_ID).description("????????? ID")
                        ),
                        requestFields(
                                fieldWithPath("inqueryId").type(JsonFieldType.NUMBER).description("????????? ??????"),
                                fieldWithPath("counselorId").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("title").type(JsonFieldType.STRING).description("?????? ??????"),
                                fieldWithPath("content").type(JsonFieldType.STRING).description("?????? ??????")
                        ),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("????????????"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("????????????"),
                                fieldWithPath("response.inqueryId").type(JsonFieldType.NUMBER).description("????????? ??????"),
                                fieldWithPath("response.counselorId").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("response.title").type(JsonFieldType.STRING).description("?????? ??????"),
                                fieldWithPath("response.content").type(JsonFieldType.STRING).description("?????? ??????"),
                                fieldWithPath("response.createdAt").type(JsonFieldType.STRING).description("?????????"),
                                fieldWithPath("response.updatedAt").type(JsonFieldType.STRING).description("?????????")
                        )
                ))
        ;
    }

    @Test
    @DisplayName("?????? - ????????? ?????? ??????")
    void getMyAnswer() throws Exception {
        // given
        //id:customer1 ????????? ???????????? ????????? ??????
        InqueryModel inquery = customerService.getAllMyInquerys(USER_ID).get(0);
        //?????????1??? ?????? ???????????? ??????.
        counselorService.updateInquery(COUNSELOR_ID, inquery.getId());
        //?????????1??? ?????? ??????
        AnswerModel answer = AnswerModel.builder().inqueryId(inquery.getId()).counselorId(COUNSELOR_ID).title("??????1").content("??????1").build();
        counselorService.saveAnswers(COUNSELOR_ID, answer);

        // when
        // ?????????ID 'ramsbaby' ????????????
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
                                headerWithName(X_USER_ID).description("????????? ID")
                        ),
                        pathParameters(parameterWithName("inqueryId").description("????????? ??????")),
                        responseFields(
                                fieldWithPath("success").type(JsonFieldType.BOOLEAN).description("????????????"),
                                fieldWithPath("error").type(JsonFieldType.NULL).description("????????????"),
                                fieldWithPath("response.inqueryId").type(JsonFieldType.NUMBER).description("????????? ??????"),
                                fieldWithPath("response.counselorId").type(JsonFieldType.STRING).description("????????? ID"),
                                fieldWithPath("response.title").type(JsonFieldType.STRING).description("?????? ??????"),
                                fieldWithPath("response.content").type(JsonFieldType.STRING).description("?????? ??????"),
                                fieldWithPath("response.createdAt").type(JsonFieldType.STRING).description("?????????"),
                                fieldWithPath("response.updatedAt").type(JsonFieldType.STRING).description("?????????")
                        )
                ))
        ;
    }
}
