import { useState } from "react";
import Select from "react-select";
import { cityOptions, guOptions } from "../utils/regionList";

export const RegionProduct = () => {
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
    <div>
      <section className="flex justify-center text-gray-600 min-w-[700px]">
        <div className="px-4 py-24 mx-7 max-w-[1200px]">
          <div className="pl-4 flex items-center justify-between ">
            <span className="text-2xl">지역 매물</span>
            <div className="flex w-full max-w-[330px]">
              <Select className="w-full mr-2" options={cityOptions} value={city} onChange={handleCityChange} placeholder="시" isClearable={true} />
              <Select
                className="w-full"
                options={filteredGuOptions}
                value={gu}
                onChange={handleGuChange}
                placeholder="구"
                isDisabled={!city}
                isClearable={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
            <div className="p-4">
              <img alt="ecommerce" className="object-cover object-center w-full" src="https://dummyimage.com/420x260" />

              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">카테고리</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Title</h2>
                <p className="mt-1">10,000원</p>
              </div>
            </div>
            <div className="p-4">
              <img alt="ecommerce" className="object-cover object-center w-full" src="https://dummyimage.com/420x260" />

              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">카테고리</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Title</h2>
                <p className="mt-1">10,000원</p>
              </div>
            </div>
            <div className="p-4">
              <img alt="ecommerce" className="object-cover object-center w-full" src="https://dummyimage.com/420x260" />

              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">카테고리</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Title</h2>
                <p className="mt-1">10,000원</p>
              </div>
            </div>
            <div className="p-4">
              <img alt="ecommerce" className="object-cover object-center w-full" src="https://dummyimage.com/420x260" />

              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">카테고리</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Title</h2>
                <p className="mt-1">10,000원</p>
              </div>
            </div>
            <div className="p-4">
              <img alt="ecommerce" className="object-cover object-center w-full" src="https://dummyimage.com/420x260" />

              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">카테고리</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Title</h2>
                <p className="mt-1">10,000원</p>
              </div>
            </div>
            <div className="p-4">
              <img alt="ecommerce" className="object-cover object-center w-full" src="https://dummyimage.com/420x260" />

              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">카테고리</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Title</h2>
                <p className="mt-1">10,000원</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
