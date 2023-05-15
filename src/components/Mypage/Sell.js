import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getMySellProducts } from "../../api/mypage";

export const Sell = () => {
  // const { data } = useQuery("sell", getMySellProducts, {
  //   refetchOnWindowFocus: false,
  //   // staleTime: 600 * 1000,
  // });
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // });
  return <div>Selling</div>;
};
