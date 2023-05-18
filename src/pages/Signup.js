import { useNavigate } from "react-router-dom";
import { Broccoli } from "../assets/icons/Broccoli";
import { TextInputField } from "../components/common/TextInputField";
import { GreenButton } from "../components/common/GreenButton";
import { useInput } from "../hooks/useInput";
import { ClickableTextHighlight } from "../components/common/ClickableTextHighlight";
import { useEffect, useState } from "react";
import { cityOptions, guOptions } from "../utils/regionList";
import { toast } from "react-toastify";
import Select from "react-select";
import { emailVerificationApi, signupApi } from "../api/auth";
import { useMutation } from "react-query";
import { LoadingSpinner } from "../utils/LoadingSpinner";
import { motion } from "framer-motion";
import validator from "validator";

export const Signup = () => {
  const navigate = useNavigate();

  const onSignupHandler = (e) => {
    if (!username) return toast.error("아이디를 입력해주세요");
    if (!password) return toast.error("비밀번호를 입력해주세요");
    if (password !== passwordChecker) return toast.error("비밀번호가 일치하지 않습니다");
    if (!nickname) return toast.error("닉네임을 입력해주세요");
    if (!email) return toast.error("이메일을 입력해주세요");
    if (!city) return toast.error("시를 입력해주세요");
    if (!gu) return toast.error("구를 입력해주세요");

    signupMutation.mutate({ id: username, password, nickname, email, address: `${city.value} ${gu.value}`, authCode: verificationNumber });
  };

  const signupMutation = useMutation(signupApi, {
    onSuccess: () => {
      toast.success("Signup successful");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.response.data.errorMessage);
    },
  });

  const [username, handleUsernameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [nickname, handleNicknameChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [passwordChecker, handlePasswordCheckerChange] = useInput("");
  const [verificationNumber, setVerificationNumber] = useState("");
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [remainingTime, setRemainingTime] = useState(300); // 5 minutes in seconds

  const sendEmailVerification = async () => {
    if (!validator.isEmail(email)) {
      return toast.error("올바른 이메일을 입력해주세요");
    }
    await emailVerificationApi(email);
    toast.success("인증번호를 이메일로 보냈습니다");
    setShowVerificationInput(true);
    startTimer();
  };

  const startTimer = () => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  };

  useEffect(() => {
    if (remainingTime === 0) {
      setShowVerificationInput(false);
      // Perform any necessary actions when the timer expires
    }
  }, [remainingTime]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds % 60).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const [city, setCity] = useState(null);
  const [gu, setGu] = useState(null);
  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
    setGu(null);
  };
  const filteredGuOptions = guOptions.filter((option) => option.province === city?.value);
  const handleGuChange = (selectedOption) => {
    setGu(selectedOption);
  };
  // console.log(city, gu);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: state.isFocused ? "0 0 0 1px #047857" : "#047857",
      borderColor: state.isFocused ? "#047857" : "#6EE7B7",
      borderWidth: "2px",
      "&:hover": {
        borderColor: state.isFocused ? "#047857" : "#047857",
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex  items-center h-screen justify-between"
    >
      {signupMutation.isLoading && <LoadingSpinner />}
      <div className="flex justify-center items-center w-full h-full bg-green-100">
        <Broccoli height="400px" width="400px" />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full max-w-xl bg-[#f1ffe9] py-16 parent text-commonTextColor shadow-sm">
        <div className="text-4xl mb-5 text-commonTextColor font-bold">SIGNUP</div>

        <TextInputField
          autofocus={true}
          inputLabel="Username"
          inputType="text"
          placeholderText="아이디"
          value={username}
          handleInputChange={handleUsernameChange}
        />
        <TextInputField
          inputLabel="Password"
          inputType="password"
          placeholderText="비밀번호"
          value={password}
          handleInputChange={handlePasswordChange}
        />
        <TextInputField
          inputLabel="Confirm Password"
          inputType="password"
          placeholderText="비밀번호 확인"
          value={passwordChecker}
          handleInputChange={handlePasswordCheckerChange}
        />

        <TextInputField inputLabel="Nickname" inputType="text" placeholderText="닉네임" value={nickname} handleInputChange={handleNicknameChange} />
        <div className="w-2/3 flex items-end">
          <TextInputField inputLabel="Email" inputType="email" placeholderText="이메일" value={email} handleInputChange={handleEmailChange} />
          <div className="w-[110px]">
            <GreenButton buttonText="인증하기" size="sm" clickHandler={sendEmailVerification} />
          </div>
        </div>
        {/* Verification Input */}
        {showVerificationInput && (
          <TextInputField
            autofocus={true}
            inputLabel="Verification Number"
            inputType="text"
            placeholderText="인증번호를 입력해주세요"
            value={verificationNumber}
            handleInputChange={(e) => setVerificationNumber(e.target.value)}
          />
        )}

        {/* Timer */}
        {showVerificationInput && (
          <div className="w-2/3 flex items-end px-4 pt-1">
            <div className="mr-2 text-gray-600 text-sm">남은 시간:</div>
            <div className="text-gray-600 text-sm font-bold">{formatTime(remainingTime)}</div>
          </div>
        )}
        <div name="Selector" className="w-2/3 px-4 mt-3">
          <label htmlFor="Selector" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <div className="flex">
            <Select
              styles={customStyles}
              className="w-full mr-2"
              options={cityOptions}
              value={city}
              onChange={handleCityChange}
              placeholder="시"
              // isClearable={true}
            />
            <Select
              styles={customStyles}
              className="w-full"
              options={filteredGuOptions}
              value={gu}
              onChange={handleGuChange}
              placeholder="구"
              isDisabled={!city}
              // isClearable={true}
            />
          </div>
        </div>

        <div className="mt-5 w-2/3 p-3 px-4 rounded-md">
          <GreenButton buttonText="Signup" clickHandler={onSignupHandler} />
        </div>

        <div className="flex items-center">
          <div className="text-lg my-2 mr-2">이미 회원이신가요?</div>
          <ClickableTextHighlight onClickHandler={() => navigate("/login")}>로그인</ClickableTextHighlight>
        </div>
      </div>
    </motion.div>
  );
};
