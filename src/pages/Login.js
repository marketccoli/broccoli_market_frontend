import React from "react";
import { useNavigate } from "react-router-dom";
import { Broccoli } from "../assets/icons/Broccoli";

export const Login = () => {
  const navigate = useNavigate();
  const onLoginHandler = () => {};
  return (
    <div className="flex  items-center h-screen -mt-20 justify-between">
      <div className="flex justify-center items-center w-full h-full bg-green-100">
        <Broccoli height="400px" width="400px" />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full max-w-xl bg-[#f1ffe9] py-16 parent text-commonTextColor shadow-sm">
        <div className="text-4xl mb-5 text-commonTextColor font-bold">LOGIN</div>

        <div className="w-2/3 p-3 px-4">
          <label htmlFor="username" className="leading-7 text-sm text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="bg-green-50 border-2 border-green-300 h-10 px-5 w-full mr-3 rounded-lg text-sm focus:border-none focus:ring-2 focus:ring-green-700 outline-none focus:bg-white text-green-900 transition-colors duration-200 ease-in-out ::placeholder:text-green-500"
            placeholder="아이디를 입력해주세요"
          />
        </div>
        <div className="w-2/3 p-3 px-4 ">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-green-50 border-2 border-green-300 h-10 px-5 w-full mr-3 rounded-lg text-sm focus:border-none focus:ring-2 focus:ring-green-700 outline-none focus:bg-white text-green-900 transition-colors duration-200 ease-in-out ::placeholder:text-green-500"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="w-2/3 p-3 px-4 rounded-md">
          <button
            onClick={onLoginHandler}
            className="text-lg font-bold text-white bg-[#20b34c] cursor-pointer py-2.5 px-3.5 w-full rounded-md hover:bg-[#47d070] transition duration-300 shadow-md"
          >
            Login
          </button>
        </div>
        <div className="text-lg text-questionTextGray my-2">
          아직 계정이 없으신가요?
          <span className="text-textPurple cursor-pointer" onClick={() => navigate("/signup")}>
            Signup
          </span>
        </div>
      </div>
    </div>
  );
};
