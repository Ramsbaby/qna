import React, { useEffect, useState } from "react";
import axios from "axios";
import CommonTable from "../table/CommonTable";
import CommonTableColumn from "../table/CommonTableColumn";
import CommonTableRow from "../table/CommonTableRow";
import "./Post.css";

const PostViewHistory = ({ history, match }) => {
  const [dataList, setDataList] = useState([]);

  const getHistory = () => {
    axios
      .get(`http://localhost:8000/api/history`)
      .then((response) => {
        //답변글이 있는 경우 표현.
        setDataList(response.data.response);
      })
      .catch((Error) => {
        //답변글이 없는 경우 입력해야 함.
      });
  };

  useEffect(() => {
    getHistory();
  }, []);

  const backToMain = () => {
    history.goBack();
  };

  const refresh = () => {
    getHistory();
  };

  return (
    <>
      <div className="topBtnDiv">
        <button onClick={backToMain}>메인화면으로</button>
        <button onClick={refresh}>새로고침</button>
      </div>
      <div className="title">QnA 히스토리 목록</div>
      <CommonTable
        headersName={[
          "히스토리 번호",
          "문의글 번호",
          "작성자 ID",
          "상담사 ID",
          "답변여부",
          "답변글 번호",
          "등록일",
          "수정일",
        ]}
      >
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.id}</CommonTableColumn>
                  <CommonTableColumn>{item.inqueryId}</CommonTableColumn>
                  <CommonTableColumn>{item.userId}</CommonTableColumn>
                  <CommonTableColumn>{item.counselorId}</CommonTableColumn>
                  <CommonTableColumn>{item.isAnswered}</CommonTableColumn>
                  <CommonTableColumn>{item.answerId}</CommonTableColumn>
                  <CommonTableColumn>{item.createdAt}</CommonTableColumn>
                  <CommonTableColumn>{item.updatedAt}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </>
  );
};

export default PostViewHistory;
