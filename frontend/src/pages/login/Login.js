import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = (props) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const onClickLogin = () => {
    console.log(props);

    axios
      .post(" http://localhost:8000/api/userLogin", {
        id: userId,
        password: userPw,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          alert("로그인 성공");
          localStorage.setItem(
            "userInfo",
            JSON.stringify(response.data.response)
          );
          props.history.push("/PostMainCounselor");
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

  const onClickSignUpBtn = () => {
    console.log(props);
    props.history.push("/signUp");
  };

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangeUserPw = (e) => {
    setUserPw(e.target.value);
  };

  const enterkey = () => {
    if (window.event.keyCode === 13) {
      // 엔터키가 눌렸을 때 실행할 내용
      onClickLogin();
    }
  };

  return (
    <div className="loginpage">
      <h2>로그인</h2>
      <div>
        아이디 :{" "}
        <input className="inputId" value={userId} onChange={onChangeUserId} />
      </div>
      <div>
        비밀번호 :{" "}
        <input
          className="inputPw"
          type="password"
          value={userPw}
          onChange={onChangeUserPw}
          onKeyPress={enterkey}
        />
      </div>
      <button className="cancelBtn" onClick={() => props.history.push("/")}>
        취소
      </button>
      <button className="loginBtn" onClick={onClickLogin}>
        로그인
      </button>
      <button className="signUpBtn" onClick={onClickSignUpBtn}>
        회원가입
      </button>
    </div>
  );
};

export default Login;
