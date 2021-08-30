import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Post.css";

const PostRegistCustomer = ({ history, location: { state }, match }) => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const postRegist = () => {
    if (userId === "") {
      alert("작성자 ID를 입력해야 합니다.");
      return;
    }
    if (title === "") {
      alert("제목을 입력해야 합니다.");
      return;
    }
    if (content === "") {
      alert("내용을 입력해야 합니다.");
      return;
    }

    axios
      .post("http://localhost:8000/api/inquery", {
        userId: userId,
        title: title,
        content: content,
      })
      .then((response) => {
        if (response.data.success) {
          alert("문의글 등록이 완료되었습니다.");
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
  useEffect(() => {
    // setData(state);
  }, []);

  return (
    <>
      <h2 align="center">문의글 작성</h2>

      <div className="post-view-wrapper">
        <>
          <div className="post-view-row">
            <label>작성자 ID</label>
            <input value={userId} onChange={onChangeUserId}></input>
          </div>
          <div className="post-view-row">
            <label>제목</label>
            <input value={title} onChange={onChangeTitle}></input>
          </div>
          <div className="post-view-row">
            <label>내용</label>
            <textarea value={content} onChange={onChangeContent}></textarea>
          </div>
        </>

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

export default PostRegistCustomer;
