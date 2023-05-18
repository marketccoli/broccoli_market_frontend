import { useEffect, useState } from "react";
import Select from "react-select";
import { cityOptions, guOptions } from "../utils/regionList";
import { ProductCard } from "../components/common/ProductCard";
import { motion } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getProductListByRegion, getTradeProduct } from "../api/product";
import { toast } from "react-toastify";
import { LoadingSpinner } from "../utils/LoadingSpinner";

export const RegionProduct = () => {
  const [city, setCity] = useState(null);
  const [gu, setGu] = useState(null);
  const queryClient = useQueryClient();
  // const { data, isLoading } = useQuery(`regionList`, () => getProductListByRegion([city?.value, gu?.value]), {
  //   refetchOnWindowFocus: false,
  //   // staleTime: 600 * 1000,
  // });
  const [products, setProducts] = useState([]);

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
    setGu(null);
  };

  const filteredGuOptions = guOptions.filter((option) => option.province === city?.value);
  const regionSearchMutation = useMutation(getProductListByRegion, {
    onSuccess: (response) => {
      setProducts(response.data.products);
    },
    onError: (error) => {
      toast.error(error.response.data.errorMessage);
    },
  });

  const SearchMutation = useMutation(getTradeProduct, {
    onSuccess: (response) => {
      setProducts(response);
    },
    onError: (error) => {
      toast.error(error.response.data.errorMessage);
    },
  });

  const handleGuChange = (selectedOption) => {
    setGu(selectedOption);
    regionSearchMutation.mutate([city?.value, selectedOption?.value]);
  };
  useEffect(() => {
    SearchMutation.mutate();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {regionSearchMutation.isLoading && <LoadingSpinner />}
      <section className="flex justify-center text-gray-600 min-w-[700px] w-full">
        <div className="px-4 py-24 mx-7 max-w-[1200px] w-full">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 ">
            {products && products.filter((product) => !product.is_sold).map((product) => <ProductCard key={product.product_id} product={product} />)}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
