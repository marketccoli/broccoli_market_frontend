import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getMySellProducts } from "../../api/mypage";
import { ProductCard } from "../common/ProductCard";

export const Sell = () => {
  const { data } = useQuery("sell", getMySellProducts, {
    refetchOnWindowFocus: false,
    // staleTime: 600 * 1000,
  });
  useEffect(() => {
    if (data) {
      // console.log(data);
    }
  });
  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <div className=" w-full">
        <h2 className="pl-1 text-xl font-bold">관심 목록</h2>
        <div className="border-b border-gradient w-full my-2"></div>
      </div>
      <span></span>
      {data?.data.likePtoduct.length ? "" : "아이템이 없습니다."}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 max-h-full">
        {data?.data.likePtoduct.length ? data.data.likePtoduct.map((product) => <ProductCard key={product.product_id} product={product} />) : ""}
      </div>
    </div>
  );
};
