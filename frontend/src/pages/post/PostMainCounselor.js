import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../table/CommonTable";
import CommonTableColumn from "../table/CommonTableColumn";
import CommonTableRow from "../table/CommonTableRow";
import axios from "axios";
import { useInterval } from "../../utils";
import "./Post.css";

const PostMainCounselor = (props) => {
  const [dataList, setDataList] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  //상담사 지정
  const togglePopup = (param, event) => {
    if (window.confirm("해당 문의글의 지정 상담사로 선택하시겠습니까?")) {
      axios
        .patch(
          `http://localhost:8000/api/inqueryChoice/${param.inqueryId}`,
          {
            inqueryId: param.inqueryId,
            conselorId: userInfo.id,
          },
          {
            headers: {
              "X-USER-ID": userInfo.id,
            },
          }
        )
        .then((response) => {
          getInquerysList();
        })
        .catch((Error) => {
          console.log(Error);
        });
    } else {
    }
  };

  //이미 지정된 상담사 클릭
  const isCounselorExistAlert = () => {
    alert("이미 담당자가 지정된 문의건입니다.");
  };

  useEffect(() => {
    getInquerysList();
  }, []);

  useInterval(() => {
    getInquerysList();
  }, 1000 * 10);

  const getInquerysList = async () => {
    await axios
      .get("http://localhost:8000/api/inquerys")
      .then((response) => {
        setDataList(response.data.response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    props.history.push("/");
  };

  return (
    <>
      <button className="logoutBtn" onClick={logout}>
        로그아웃
      </button>
      <div>로그인 ID : {userInfo.id}</div>
      <div className="title">고객 문의 목록 (상담사 전용)</div>
      <CommonTable
        headersName={[
          "글번호",
          "고객ID",
          "제목",
          "상담사ID",
          "등록일",
          "답변등록",
          "답변등록여부",
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
                    {item.counselorId == null ? (
                      <button
                        onClick={() =>
                          togglePopup({
                            inqueryId: item.id,
                          })
                        }
                      >
                        없음
                      </button>
                    ) : (
                      <div onClick={isCounselorExistAlert}>
                        {item.counselorId}
                      </div>
                    )}
                  </CommonTableColumn>
                  <CommonTableColumn>{item.createdAt}</CommonTableColumn>
                  <CommonTableColumn>
                    {userInfo !== null && item.counselorId === userInfo.id ? (
                      <Link
                        to={{
                          pathname: `/PostRegistCounselor`,
                          state: {
                            inqueryId: item.id,
                            userId: item.userId,
                            title: item.title,
                            content: item.content,
                            counselorId: item.counselorId,
                            createdAt: item.createdAt,
                            updatedAt: item.updatedAt,
                          },
                        }}
                      >
                        등록
                      </Link>
                    ) : (
                      `등록불가`
                    )}
                  </CommonTableColumn>
                  <CommonTableColumn>{item.isAnswered}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </>
  );
};

export default PostMainCounselor;
