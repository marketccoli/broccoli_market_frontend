import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/common/ProductCard";
import { motion } from "framer-motion";
import { searchProduct } from "../api/product";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

export const SearchProduct = () => {
  const [products, setProducts] = useState();

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("keyword");

  const { data } = useQuery(["searchedList", searchQuery], () => searchProduct(searchQuery), {
    refetchOnWindowFocus: false,
    // staleTime: 600 * 1000,
  });

  useEffect(() => {
    if (data) {
      setProducts(data.data.result);
    }
  }, [data, setProducts]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-center text-gray-600 min-w-[700px]"
    >
      <div className="px-4 py-24 mx-7 max-w-[1200px]">
        <div className="pl-4 flex items-center ">
          <p className="text-green-800 text-lg font-bold pr-2">{searchQuery}</p>
          <span className="text-2xl">에 대한검색 결과</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 ">
          {products && products.map((product) => <ProductCard key={product.product_id} product={product} />)}
        </div>
      </div>
    </motion.div>
  );
};
