import React from "react";
import { useNavigate } from "react-router-dom";
import { Broccoli } from "../assets/icons/Broccoli";
import { TextInputField } from "../assets/TextInputField";
import { GreenButton } from "../assets/GreenButton";

export const Signup = () => {
  const navigate = useNavigate();
  const onLoginHandler = () => {};
  return (
    <div className="flex  items-center h-screen -mt-20 justify-between">
      <div className="flex justify-center items-center w-full h-full bg-green-100">
        <Broccoli height="400px" width="400px" />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full max-w-xl bg-[#f1ffe9] py-16 parent text-commonTextColor shadow-sm">
        <div className="text-4xl mb-5 text-commonTextColor font-bold">SIGNUP</div>

        <TextInputField inputLabel="Username" inputType="username" placeholderText="아이디를 입력해주세요" />
        <TextInputField inputLabel="Password" inputType="password" placeholderText="비밀번호를 입력해주세요" />

        <div className="w-2/3 p-3 px-4 rounded-md">
          <GreenButton buttonText="Signup" clickHandler={onLoginHandler} />
        </div>
        <div className="text-lg text-questionTextGray my-2">
          이미 회원이신가요?
          <span className="text-textPurple cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
};
