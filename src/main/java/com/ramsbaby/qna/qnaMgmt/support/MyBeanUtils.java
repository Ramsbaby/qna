package com.ramsbaby.qna.qnaMgmt.support;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * @author : RAMSBABY
 * @date : 2021-08-29 오전 2:10
 */
@Component
public class MyBeanUtils implements ApplicationContextAware {
    private static ApplicationContext applicationContext;

    public static <T> T getBean(Class<T> clazz) {
        return applicationContext.getBean(clazz);
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        MyBeanUtils.applicationContext = applicationContext;
    }
}
