package com.ramsbaby.qna.qnaMgmt.support;

import java.util.Base64;

/**
 * @author : RAMSBABY
 * @date : 2021-08-29 오후 3:26
 */
public class Base64Util {
    public static String setStrToEncode(String password) {
        byte[] targetBytes = password.getBytes();
        Base64.Encoder encoder = Base64.getEncoder();
        byte[] encodedBytes = encoder.encode(targetBytes);
        return new String(encodedBytes);
    }

    public static String setEncodeToStr(String password) {
        byte[] targetBytes = password.getBytes();
        Base64.Decoder decoder = Base64.getDecoder();
        byte[] decodedBytes = decoder.decode(targetBytes);
        return new String(decodedBytes);
    }
}
