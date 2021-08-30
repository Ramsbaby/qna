import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

const SignUp = (props) => {
  const [userId, setUserId] = useState("");
  const [username, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [isIdError, setIsIdError] = useState(false);
  const [isPassWordError, setIsPassWordError] = useState(false);
  const [isPassWordCheckError, setIsPassWordCheckError] = useState(false);

  const onChangeId = (e) => {
    setUserId(e.target.value);
  };
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const onChangePasswordCheck = (e) => {
    setUserPasswordCheck(e.target.value);
  };

  const onClickCancelBtn = () => {
    props.history.push("/login");
  };

  const onClickSignUpBtn = async () => {
    setIsIdError(false);
    setIsPassWordError(false);
    setIsPassWordCheckError(false);

    const idRegex = new RegExp("^[a-zA-Z0-9]{4,12}$");
    const passwordRegex = new RegExp("^(?=.*[0-9])(?=.*[a-zA-z]).{8,15}$");
    if (!idRegex.test(userId)) {
      setIsIdError(true);
      return;
    }

    if (!passwordRegex.test(userPassword)) {
      setIsPassWordError(true);
      return;
    }

    if (userPassword !== userPasswordCheck) {
      setIsPassWordCheckError(true);
      return;
    }

    axios
      .post("http://localhost:8000/api/user", {
        id: userId,
        name: username,
        role: "C",
        password: userPassword,
      })
      .then((response) => {
        if (response.data.success) {
          alert("회원가입이 완료되었습니다.");
          props.history.push("/login");
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

  const handleSubmit = () => {
    console.log("handlesubmit");
  };

  return (
    <div className="signuppage">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          아이디 <input value={userId} onChange={onChangeId} />
        </div>
        {isIdError ? (
          <span className="redText">
            아이디는 4~12자의 영문 대소문자와 숫자로만 입력해 주세요.
          </span>
        ) : (
          <></>
        )}
        <div>
          닉네임
          <input value={username} onChange={onChangeUserName} />
        </div>
        <div>
          비밀번호{" "}
          <input
            type="password"
            value={userPassword}
            onChange={onChangePassword}
          />
        </div>
        {isPassWordError ? (
          <span className="redText">
            비밀번호는 영문, 숫자 조합으로 8~15자리로 입력해 주세요.
          </span>
        ) : (
          <></>
        )}
        <div>
          비밀번호 확인{" "}
          <input
            type="password"
            value={userPasswordCheck}
            onChange={onChangePasswordCheck}
          />
        </div>
        {isPassWordCheckError ? (
          <span className="redText">비밀번호가 일치하지 않습니다.</span>
        ) : (
          <></>
        )}
      </form>

      <button className="cancelBtn" onClick={onClickCancelBtn}>
        취소
      </button>
      <button className="signupBtn" onClick={onClickSignUpBtn}>
        회원가입
      </button>
    </div>
  );
};

export default SignUp;
