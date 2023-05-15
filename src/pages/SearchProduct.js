import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/common/ProductCard";
import { motion } from "framer-motion";

export const SearchProduct = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("keyword");
  const product = {
    product_id: 1,
    title: "타이틀1",
    address: "서울시 용산구",
    price: "15000",
    category: "전자제품",
    likes: 10,
    views: 50,
    createdAt: "2022-07-25T07:45:56.000Z",
    is_sold: false,
    photo_ip: "https://dummyimage.com/420x260",
  };
  console.log(searchQuery);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
      </div>
    </motion.div>
  );
};
