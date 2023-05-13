import React, { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { getTradeProduct } from "../api/api";
import { useQuery } from "react-query";

export const ProductsPage = () => {
  // const product = {
  //   product_id: 1,
  //   title: "타이틀1",
  //   address: "서울시 용산구",
  //   price: "15000",
  //   category: "전자제품",
  //   likes: 10,
  //   views: 50,
  //   createdAt: "2022-07-25T07:45:56.000Z",
  //   is_sold: false,
  //   photo_ip: "https://dummyimage.com/420x260",
  // };
  const { data } = useQuery(`productList`, getTradeProduct, {
    refetchOnWindowFocus: false,
    // staleTime: 600 * 1000,
  });
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  return (
    <section className="flex justify-center text-gray-600 min-w-[700px] w-full">
      <div className="px-4 py-24 mx-7 max-w-[1200px] ">
        {/* <div className="flex w-full justify-center"> */}
        <span className="ml-3 text-2xl">중고 거래</span>
        {/* </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 ">
          {data?.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
