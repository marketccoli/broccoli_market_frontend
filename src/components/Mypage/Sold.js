import React, { useEffect, useState } from "react";
import { getMyBoughtProducts } from "../../api/mypage";
import { useQuery } from "react-query";
import { ProductCard } from "../common/ProductCard";
import { LoadingSpinner } from "../../utils/LoadingSpinner";

export const Sold = () => {
  const { data, isLoading } = useQuery("bought", getMyBoughtProducts, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="flex flex-col items-center justify-center w-full relative">
        <div className=" w-full">
          <h2 className="pl-1 text-xl font-bold">판매 내역</h2>
          <div className="border-b border-gradient w-full my-2"></div>
        </div>
        {data?.data.soldProduct.length ? "" : "판매내역이 없습니다."}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 max-h-full  w-full max-w-[1000px]">
          {data?.data.soldProduct.length ? data.data.soldProduct.map((product) => <ProductCard key={product.product_id} product={product} />) : ""}
        </div>
      </div>
    </>
  );
};
