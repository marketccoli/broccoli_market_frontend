import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getMySellProducts } from "../../api/mypage";
import { ProductCard } from "../common/ProductCard";
import { LoadingSpinner } from "../../utils/LoadingSpinner";

export const Selling = () => {
  const { data, isLoading } = useQuery("sell", getMySellProducts, {
    refetchOnWindowFocus: false,
  });

  console.log(data && data);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="flex flex-col items-center justify-center w-full relative">
        <div className=" w-full">
          <h2 className="pl-1 text-xl font-bold">판매중 목록</h2>
          <div className="border-b border-gradient w-full my-2"></div>
        </div>
        <span></span>
        {data?.data.sellPtoduct.length ? "" : "판매중 아이템이 없습니다."}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 max-h-full  w-full max-w-[1000px]">
          {data?.data.sellPtoduct.length ? data.data.sellPtoduct.map((product) => <ProductCard key={product.product_id} product={product} />) : ""}
        </div>
      </div>
    </>
  );
};
