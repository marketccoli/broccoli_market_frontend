import { useState } from "react";
import Select from "react-select";
import { cityOptions, guOptions } from "../utils/regionList";
import { ProductCard } from "../components/common/ProductCard";
import { motion } from "framer-motion";

export const RegionProduct = () => {
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
  const [city, setCity] = useState(null);
  const [gu, setGu] = useState(null);

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
    setGu(null);
  };

  const filteredGuOptions = guOptions.filter((option) => option.province === city?.value);

  const handleGuChange = (selectedOption) => {
    setGu(selectedOption);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <section className="flex justify-center text-gray-600 min-w-[700px]">
        <div className="px-4 py-24 mx-7 max-w-[1200px]">
          <div className="pl-4 flex items-center justify-between ">
            <span className="text-2xl">지역 매물</span>
            <div className="flex w-full max-w-[330px]">
              <Select
                className="w-full mr-2"
                options={cityOptions}
                value={city}
                onChange={handleCityChange}
                placeholder="시"
                // isClearable={true}
              />
              <Select
                className="w-full"
                options={filteredGuOptions}
                value={gu}
                onChange={handleGuChange}
                placeholder="구"
                isDisabled={!city}
                // isClearable={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
          </div>
        </div>
      </section>
    </motion.div>
  );
};
