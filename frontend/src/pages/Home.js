import React from "react";
import "./Home.css";
const Home = (props) => {
  return (
    <div className="homepage">
      <h2>QnA 서비스입니다. 이용하실 권한을 선택해주세요.</h2>
      <button
        className="customerBtn"
        onClick={() => props.history.push("/postMainCustomer")}
      >
        고객
      </button>
      <button
        className="consultantBtn"
        onClick={() => props.history.push("/login")}
      >
        상담사
      </button>
      <button
        className="historyBtn"
        onClick={() => props.history.push("/postViewHistory")}
      >
        히스토리
      </button>
    </div>
  );
};

export default Home;
