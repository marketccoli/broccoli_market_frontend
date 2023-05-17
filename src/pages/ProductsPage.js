import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/common/ProductCard";
import { useQuery } from "react-query";
import { getTradeProduct } from "../api/product";
import { motion } from "framer-motion";

export const ProductsPage = () => {
  const { data, isLoading } = useQuery(`productList`, getTradeProduct, {
    refetchOnWindowFocus: false,
    // staleTime: 600 * 1000,
  });
  const [products, setProducts] = useState();
  useEffect(() => {
    if (data) {
      // console.log(data);
      setProducts(data);
    }
  }, [data]);
  if (isLoading) return;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-center text-gray-600 min-w-[700px] w-full "
    >
      <div className="px-4 py-24 mx-7 max-w-[1200px] ">
        {/* <div className="flex w-full justify-center"> */}
        <span className="ml-3 text-2xl">중고 거래</span>
        {/* </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 ">
          {products && products.filter((product) => !product.is_sold).map((product) => <ProductCard key={product.product_id} product={product} />)}
        </div>
      </div>
    </motion.div>
  );
};
