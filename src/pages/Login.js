import React from "react";
import { useNavigate } from "react-router-dom";
import { Broccoli } from "../assets/icons/Broccoli";
import { TextInputField } from "../components/TextInputField";
import { GreenButton } from "../components/GreenButton";
import { useInput } from "../hooks/useInput";
import { ClickableTextHighlight } from "../components/ClickableTextHighlight";

export const Login = () => {
  const [username, handleUsernameChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const navigate = useNavigate();

  const onLoginHandler = () => {};

  return (
    <div className="flex  items-center h-screen justify-between min-w-[760px]">
      <div className="flex justify-center items-center w-full h-full bg-green-100">
        <Broccoli height="400px" width="400px" />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full max-w-xl bg-[#f1ffe9] py-16 parent text-commonTextColor shadow-sm">
        <div className="text-4xl mb-5 text-commonTextColor font-bold">LOGIN</div>

        <TextInputField
          autofocus={true}
          inputLabel="Username"
          inputType="username"
          placeholderText="아이디를 입력해주세요"
          value={username}
          handleInputChange={handleUsernameChange}
        />
        <TextInputField
          inputLabel="Password"
          inputType="password"
          placeholderText="비밀번호를 입력해주세요"
          value={password}
          handleInputChange={handlePasswordChange}
        />

        <div className="mt-5 w-2/3 p-3 px-4 rounded-md">
          <GreenButton buttonText="Login" clickHandler={onLoginHandler} size="lg" />
        </div>
        <div className="flex items-center">
          <div className="text-lg my-2 mr-2">아직 계정이 없으신가요?</div>
          <ClickableTextHighlight onClickHandler={() => navigate("/signup")}>회원가입</ClickableTextHighlight>
        </div>
      </div>
    </div>
  );
};
