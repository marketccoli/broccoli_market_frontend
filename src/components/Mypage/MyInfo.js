import React from "react";
import { getMyInfo } from "../../api/mypage";
import { useQuery } from "react-query";
import { LoadingSpinner } from "../../utils/LoadingSpinner";
import { Broccoli } from "../../assets/icons/Broccoli";
import { dateConvert } from "../../utils/dateConvert";

export const MyInfo = () => {
  const { data, isLoading } = useQuery("myinfo", getMyInfo, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="flex flex-col items-center justify-center w-full relative">
        <div className=" w-full">
          <h2 className="pl-1 text-xl font-bold">내 정보</h2>
          <div className="border-b border-gradient w-full my-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-14">
          {/* user image goes here */}
          <div className="flex justify-center items-center  h-52 w-52 bg-green-600 rounded-full ">
            <div className="flex justify-center items-center  h-40 w-40 bg-green-500 rounded-full ">
              <Broccoli width="100px" height="100px" />
            </div>
          </div>
          {/* user info goes here */}
          {data && (
            <ul className="flex flex-col justify-center">
              <li>닉네임: {data[0].User.nickname}</li>
              <li>이메일: {data[0].email}</li>
              <li>거주 지역: {data[0].address}</li>
              <li>가입일: {dateConvert(data[0].createdAt)}</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
