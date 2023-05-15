import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getMySellProducts } from "../../api/mypage";

export const Sell = () => {
  const { data } = useQuery("sell", getMySellProducts, {
    refetchOnWindowFocus: false,
    // staleTime: 600 * 1000,
  });
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  });
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="absolute top-0 left-0  w-full">
        <h2 className="pl-1 text-xl font-bold">판매중</h2>
        <div className="border-b border-gradient w-full my-2"></div>
      </div>
      <div>{data && data.data.soldProduct ? "" : "판매중인 아이템이 없습니다."}</div>
    </div>
  );
};
