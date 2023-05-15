import React, { useEffect, useState } from "react";
import { getMyBoughtProducts } from "../../api/mypage";
import { useQuery } from "react-query";

export const Bought = () => {
  const [bought, setBought] = useState();
  const { data } = useQuery("bought", getMyBoughtProducts, {
    refetchOnWindowFocus: false,
    // staleTime: 600 * 1000,
  });
  useEffect(() => {
    if (data) {
      console.log(data.data.buyProduct);
      setBought(data.data.buyProduct);
    }
  });
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="absolute top-0 left-0  w-full">
        <h2 className="pl-1 text-xl font-bold">구매 내역</h2>
        <div className="border-b border-gradient w-full my-2"></div>
      </div>
      <div>{bought && bought.length ? "" : "구매중인 아이템이 없습니다."}</div>
    </div>
  );
};
