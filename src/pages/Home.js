import React from "react";
import { GreenButton } from "../components/common/GreenButton";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Broccoli } from "../assets/icons/Broccoli";

export const Home = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.authenticated);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center bg-[#e5ffde] text-green-900 py-20 h-screen"
    >
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center animate-bounce h-52 w-52 bg-green-600 rounded-full ">
            <div className="flex justify-center items-center animate-spin h-40 w-40 bg-green-500 rounded-full ">
              <Broccoli width="100px" height="100px" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-6">당신 근처의 브로콜리 마켓</h1>
          <p className="text-lg mb-8">중고 거래부터 동네 정보까지, 이웃과 함께해요. 가깝고 따뜻한 당신의 근처를 만들어요.</p>
          <GreenButton buttonText="시작하기" clickHandler={() => navigate(isAuth ? "/products" : "/login")} />
        </div>
      </div>
    </motion.div>
  );
};
