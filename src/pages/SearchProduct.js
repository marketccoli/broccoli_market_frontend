import { useSearchParams } from "react-router-dom";

export const SearchProduct = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("keyword");
  console.log(searchQuery);
  return (
    <section className="flex justify-center text-gray-600 min-w-[700px]">
      <div className="px-4 py-24 mx-7 max-w-[1200px]">
        <div className="pl-4 flex items-center ">
          <p className="text-green-800 text-lg font-bold pr-2">{searchQuery}</p>
          <span className="text-2xl">에 대한검색 결과</span>
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
  );
};
