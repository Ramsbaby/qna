import React, { useEffect, useState } from "react";
import "./Post.css";

const PostView = ({ history, location: { state }, match }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(state);
    console.log(state);
  }, []);

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {data ? (
          <>
            <div className="post-view-row">
              <label>게시글 번호</label>
              <label>{data.id}</label>
            </div>
            <div className="post-view-row">
              <label>제목</label>
              <label>{data.title}</label>
            </div>
            <div className="post-view-row">
              <label>작성자 ID</label>
              <label>{data.userId}</label>
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
              <label>문의내용</label>
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

export default PostView;
