import React, { useEffect, useState } from "react";
import { getMyBoughtProducts } from "../../api/mypage";
import { useQuery } from "react-query";
import { ProductCard } from "../common/ProductCard";

export const Bought = () => {
  const [bought, setBought] = useState();
  const { data } = useQuery("bought", getMyBoughtProducts, {
    refetchOnWindowFocus: false,
    // staleTime: 600 * 1000,
  });
  useEffect(() => {
    if (data) {
      console.log(data.data);
      setBought(data.data.buyProduct);
    }
  });
  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <div className=" w-full">
        <h2 className="pl-1 text-xl font-bold">판매 내역</h2>
        <div className="border-b border-gradient w-full my-2"></div>
      </div>
      {data?.data.buyProduct.length ? "" : "판매내역이 없습니다."}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 max-h-full  w-full max-w-[1000px]">
        {data?.data.buyProduct.length ? data.data.buyProduct.map((product) => <ProductCard key={product.product_id} product={product} />) : ""}
      </div>
    </div>
  );
};
