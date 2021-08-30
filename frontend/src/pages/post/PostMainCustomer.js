import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../table/CommonTable";
import CommonTableColumn from "../table/CommonTableColumn";
import CommonTableRow from "../table/CommonTableRow";
import axios from "axios";
import "./Post.css";

const PostMainCustomer = (props) => {
  const [dataList, setDataList] = useState([]);
  const [userId, setUserId] = useState("");
  const [isIdError, setIsIdError] = useState(false);

  const idRegex = new RegExp("^[a-zA-Z0-9]{4,12}$");

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onKeyPressHandler = (e) => {
    if (e.key === "Enter") getInquerysList();
  };

  const getInquerysList = () => {
    setIsIdError(false);
    if (!idRegex.test(userId)) {
      setIsIdError(true);
      return;
    }

    axios
      .get(`http://localhost:8000/api/myInquerys`, {
        headers: {
          "X-USER-ID": userId,
        },
      })
      .then((response) => {
        setDataList(response.data.response);
      })
      .catch((Error) => {
        console.log(Error);
        if (!Error.response.data.success) {
          alert(Error.response.data.error.message);
        }
      });
  };

  const logout = () => {
    props.history.push("/");
  };

  const postRegist = () => {
    props.history.push("/PostRegistCustomer");
  };

  return (
    <>
      <div className="topBtnDiv">
        <button onClick={logout}>메인화면으로</button>
        <button onClick={postRegist}>문의글 등록</button>
      </div>
      <div className="topBtnDiv">
        <input
          value={userId}
          onChange={onChangeUserId}
          onKeyPress={onKeyPressHandler}
          placeholder="검색할 ID를 입력하세요"
        ></input>
        <button onClick={getInquerysList}>문의글 검색</button>
      </div>
      {isIdError ? (
        <span className="redText">
          아이디는 4~12자의 영문 대소문자와 숫자로만 입력해 주세요.
        </span>
      ) : (
        <></>
      )}
      <div className="title">고객 문의 목록 (고객 전용)</div>
      <CommonTable
        headersName={[
          "글번호",
          "고객ID",
          "제목",
          "상담사ID",
          "등록일",
          "상담사 답변",
        ]}
      >
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.id}</CommonTableColumn>
                  <CommonTableColumn>{item.userId}</CommonTableColumn>
                  <CommonTableColumn>
                    <Link
                      to={{
                        pathname: `/PostView`,
                        state: {
                          id: item.id,
                          userId: item.userId,
                          title: item.title,
                          content: item.content,
                          counselorId: item.counselorId,
                          createdAt: item.createdAt,
                          updatedAt: item.updatedAt,
                        },
                      }}
                    >
                      {item.title}
                    </Link>
                  </CommonTableColumn>
                  <CommonTableColumn>
                    {item.counselorId == null ? `없음` : item.counselorId}
                  </CommonTableColumn>
                  <CommonTableColumn>{item.createdAt}</CommonTableColumn>
                  <CommonTableColumn>
                    {item.isAnswered === "N" ? (
                      "답변없음"
                    ) : (
                      <Link
                        to={{
                          pathname: `/PostViewAnswer`,
                          state: {
                            id: item.id,
                            userId: item.userId,
                            counselorId: item.counselorId,
                          },
                        }}
                      >
                        답변보기
                      </Link>
                    )}
                  </CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </>
  );
};

export default PostMainCustomer;
