import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";

const PostViewAnswer = ({ history, location: { state }, match }) => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  console.log(state);
  const getAnswer = () => {
    axios
      .get(`http://localhost:8000/api/myAnswer/${state.id}`, {
        headers: {
          "X-USER-ID": state.counselorId,
        },
      })
      .then((response) => {
        //답변글이 있는 경우 표현.
        console.log(response.data.response);
        setData(response.data.response);
        // setDataList(response.data.response);
      })
      .catch((Error) => {
        //답변글이 없는 경우 입력해야 함.
      });
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    setData(state);
    getAnswer();
  }, []);

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {data ? (
          <>
            <div className="post-view-row">
              <label>게시글 번호</label>
              <label>{state.id}</label>
            </div>
            <div className="post-view-row">
              <label>답변 제목</label>
              <label>{data.title}</label>
            </div>
            <div className="post-view-row">
              <label>작성자 ID</label>
              <label>{state.userId}</label>
            </div>
            <div className="post-view-row">
              <label>상담사 ID</label>
              <label>{data.counselorId}</label>
            </div>
            <div className="post-view-row">
              <label>작성일</label>
              <label>{data.createdAt}</label>
            </div>
            <div className="post-view-row">
              <label>답변내용</label>
              <textarea value={data.content} readOnly />
            </div>
          </>
        ) : (
          "해당 게시글을 찾을 수 없습니다."
        )}
        <button
          className="post-view-go-list-btn"
          onClick={() => history.goBack()}
        >
          목록으로 돌아가기
        </button>
      </div>
    </>
  );
};

export default PostViewAnswer;
