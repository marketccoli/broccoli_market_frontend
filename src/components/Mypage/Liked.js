import React, { useEffect } from "react";
import { getMyLikedProducts } from "../../api/mypage";
import { useQuery } from "react-query";
import { ProductCard } from "../common/ProductCard";

export const Liked = () => {
  const { data } = useQuery("liked", getMyLikedProducts, {
    refetchOnWindowFocus: false,
    // staleTime: 600 * 1000,
  });
  useEffect(() => {
    if (data) {
      // console.log(data.data.likePtoduct);
    }
  });
  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <div className=" w-full">
        <h2 className="pl-1 text-xl font-bold">관심 목록</h2>
        <div className="border-b border-gradient w-full my-2"></div>
      </div>
      {data?.data.likePtoduct.length ? "" : "아이템이 없습니다."}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 max-h-full">
        {data?.data.likePtoduct.length ? data.data.likePtoduct.map((product) => <ProductCard key={product.product_id} product={product} />) : ""}
      </div>
    </div>
  );
};
