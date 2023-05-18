import React, { useEffect, useState } from "react";
import { Selling } from "../components/Mypage/Selling";
import { motion } from "framer-motion";
import { ClickableTextHighlight } from "../components/common/ClickableTextHighlight";
import { MyInfo } from "../components/Mypage/MyInfo";
import { Liked } from "../components/Mypage/Liked";
import { Sold } from "../components/Mypage/Sold";
import { fetchChat, fetchChatLists } from "../api/chat";
import { useSelector } from "react-redux";
import { useMutation } from "react-query";
import { GreenButton } from "../components/common/GreenButton";

export const Mypage = () => {
  // myinfo, selling, liked, sold tabs
  const [activeTab, setActiveTab] = useState("myInfo");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-center min-w-[700px]"
    >
      <div className="px-4 py-24 mx-7 min-w-[700px] w-full">
        <div className="absolute pt-12">
          <h2 className=" font-bold text-xl mb-4">Mypage</h2>
          <div className="border-b border-gradient w-full my-4"></div>
          <ul className="flex flex-col space-y-2 w-[120px]">
            <li>
              <ClickableTextHighlight selectionHighlight={activeTab === "myInfo"} onClickHandler={() => handleTabChange("myInfo")}>
                내 정보
              </ClickableTextHighlight>
            </li>
            <li>
              <ClickableTextHighlight selectionHighlight={activeTab === "selling"} onClickHandler={() => handleTabChange("selling")}>
                판매중
              </ClickableTextHighlight>
            </li>
            <li>
              <ClickableTextHighlight selectionHighlight={activeTab === "liked"} onClickHandler={() => handleTabChange("liked")}>
                관심 목록
              </ClickableTextHighlight>
            </li>
            <li>
              <ClickableTextHighlight selectionHighlight={activeTab === "sold"} onClickHandler={() => handleTabChange("sold")}>
                판매 내역
              </ClickableTextHighlight>
            </li>
          </ul>
        </div>
        <div className="flex  justify-center items-center">
          <div className="w-3/4 p-12 ">
            {activeTab === "myInfo" && <MyInfo />}
            {activeTab === "selling" && <Selling />}
            {activeTab === "liked" && <Liked />}
            {activeTab === "sold" && <Sold />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
