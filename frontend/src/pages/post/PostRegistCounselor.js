import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Post.css";

const PostRegistCounselor = ({ history, location: { state } }) => {
  const [data, setData] = useState({});
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const postRegist = () => {
    if (title === "") {
      alert("답변 제목을 입력해야 합니다.");
      return;
    }
    if (content === "") {
      alert("답변 내용을 입력해야 합니다.");
      return;
    }

    axios
      .post(
        "http://localhost:8000/api/answers",
        {
          inqueryId: data.inqueryId,
          counselorId: userInfo.id,
          title: title,
          content: content,
        },
        {
          headers: {
            "X-USER-ID": userInfo.id,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          alert("답변 등록이 완료되었습니다.");
          history.goBack();
        } else {
          alert(response.data.error.message);
        }
      })
      .catch((Error) => {
        if (!Error.response.data.success) {
          alert(Error.response.data.error.message);
        }
      });
  };

  const getAnswer = () => {
    axios
      .get(`http://localhost:8000/api/myAnswer/${state.inqueryId}`, {
        headers: {
          "X-USER-ID": userInfo.id,
        },
      })
      .then((response) => {
        //답변글이 있는 경우 표현.
        console.log(response);
        setTitle(response.data.response.title);
        setContent(response.data.response.content);
        // setDataList(response.data.response);
      })
      .catch((Error) => {
        //답변글이 없는 경우 입력해야 함.
      });
  };

  useEffect(() => {
    setData(state);
    getAnswer();
  }, []);

  return (
    <>
      <h2 align="center">답변 작성 페이지</h2>

      <div className="post-view-wrapper">
        {data ? (
          <>
            <div className="post-view-row">
              <label>게시글 번호</label>
              <label>{data.inqueryId}</label>
            </div>
            <div className="post-view-row">
              <label>문의글 제목</label>
              <label>{data.title}</label>
            </div>
            <div className="post-view-row">
              <label>작성자 ID</label>
              <label>{data.userId}</label>
            </div>
            <div className="post-view-row">
              <label>문의글 작성일</label>
              <label>{data.createdAt}</label>
            </div>
            <div className="post-view-row">
              <label>문의 내용</label>
              <textarea value={data.content} readOnly />
            </div>
            <div className="post-view-row">
              <label>답변 제목</label>
              <input value={title} onChange={onChangeTitle}></input>
            </div>
            <div className="post-view-row">
              <label>답변 내용</label>
              <textarea value={content} onChange={onChangeContent}></textarea>
            </div>
          </>
        ) : (
          "해당 게시글을 찾을 수 없습니다."
        )}
        <div className="btnDiv">
          <button className="post-view-go-list-btn" onClick={postRegist}>
            등록
          </button>
          <button
            className="post-view-go-list-btn"
            onClick={() => history.goBack()}
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    </>
  );
};

export default PostRegistCounselor;
