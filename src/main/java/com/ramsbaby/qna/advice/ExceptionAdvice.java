package com.ramsbaby.qna.advice;

import com.ramsbaby.qna.advice.customException.*;
import com.ramsbaby.qna.qnaMgmt.model.common.response.CommonResult;
import com.ramsbaby.qna.qnaMgmt.service.common.ResponseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * @author : RAMSBABY
 * @date : 2021-08-23 오후 8:14
 */
@RestControllerAdvice
@RequiredArgsConstructor
public class ExceptionAdvice {
    private final ResponseServiceImpl responseService;
    private final MessageSource messageSource;

    //상담사 로그인  실패
    @ExceptionHandler(CCounselorLoginFailureException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public CommonResult counselorLoginFailureException() {
        return responseService.getFailResult(Integer.valueOf(getMessage("counselorLoginFailure.code")), getMessage("counselorLoginFailure.msg"));
    }

    //상담사 이름 중복 에러
    @ExceptionHandler(CCounselorIdExistException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public CommonResult counselorIdExistException() {
        return responseService.getFailResult(Integer.valueOf(getMessage("counselorIdExist.code")), getMessage("counselorIdExist.msg"));
    }

    //상담사 이름 없음 에러
    @ExceptionHandler(CCounselorIdIsNotExistException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public CommonResult counselorIdIsNotExistException() {
        return responseService.getFailResult(Integer.valueOf(getMessage("counselorIdIsNotExist.code")), getMessage("counselorIdIsNotExist.msg"));
    }

    //상담사 - 문의글 없음 에러
    @ExceptionHandler(CInqueryIdIsNotExistException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public CommonResult inqueryIdIsNotExistException() {
        return responseService.getFailResult(Integer.valueOf(getMessage("inqueryIdIsNotExist.code")), getMessage("inqueryIdIsNotExist.msg"));
    }

    //상담사 - 답변작성 - 본인 지정 문의글이 아닐 경우 에러
    @ExceptionHandler(CCounselorIdNotMatcheException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public CommonResult counselorIdNotMatcheExistException() {
        return responseService.getFailResult(Integer.valueOf(getMessage("counselorIdNotMatche.code")), getMessage("counselorIdNotMatche.msg"));
    }

    //상담사 - 본인 답변 없을 경우
    @ExceptionHandler(CAnswerIsNotExistException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public CommonResult answerIsNotExistException() {
        return responseService.getFailResult(Integer.valueOf(getMessage("answerIsNotExist.code")), getMessage("answerIsNotExist.msg"));
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
