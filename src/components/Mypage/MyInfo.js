import React from "react";

export const MyInfo = () => {
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="absolute top-0 left-0  w-full">
        <h2 className="pl-1 text-xl font-bold">내 정보</h2>
        <div className="border-b border-gradient w-full my-2"></div>
      </div>
      <div>내 정보</div>
    </div>
  );
};
