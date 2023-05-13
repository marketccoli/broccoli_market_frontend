import React from "react";

export const ProductsPage = () => {
  return (
    <section className="flex justify-center text-gray-600 min-w-[700px]">
      <div className="px-4 py-24 mx-7 max-w-[1200px]">
        {/* <div className="flex w-full justify-center"> */}
        <span className="ml-3 text-2xl">중고 거래</span>
        {/* </div> */}
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
  );
};
