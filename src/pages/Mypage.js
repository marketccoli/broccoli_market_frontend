import React, { useState } from "react";
import { Sell } from "../components/Mypage/Sell";

export const Mypage = () => {
  // myinfo, selling, liked, bought
  const [activeTab, setActiveTab] = useState("myInfo");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center text-gray-600 min-w-[700px] w-full ">
      <div className="px-4 py-24 mx-7 max-w-[700px] w-full">
        <div className="w-full">
          <button
            className={`px-4 py-2 mr-2 ${activeTab === "myInfo" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => handleTabChange("myInfo")}
          >
            My Info
          </button>
          <button
            className={`px-4 py-2 mr-2 ${activeTab === "selling" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => handleTabChange("selling")}
          >
            Selling
          </button>
          <button
            className={`px-4 py-2 mr-2 ${activeTab === "liked" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => handleTabChange("liked")}
          >
            Liked
          </button>
          <button
            className={`px-4 py-2 mr-2 ${activeTab === "bought" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => handleTabChange("bought")}
          >
            Bought
          </button>
        </div>

        {activeTab === "myInfo" && <div>My Info Tab Content</div>}
        {activeTab === "selling" && <Sell />}
        {activeTab === "liked" && <div>Liked Tab Content</div>}
        {activeTab === "bought" && <div>Bought Tab Content</div>}
      </div>
    </div>
  );
};
