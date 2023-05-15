import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { deleteOneTradeProduct, getOneTradeProduct } from "../api/api";
import { dateConvert } from "../utils/dateConvert";
import { AiFillHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { GreenButton } from "../components/common/GreenButton";
// {
//   "product” : {
//     “title” : “타이틀1”,
//     “content” : “컨텐츠1”,
//     “address” : “서울시 용산구”
//     “price” : “15000”,
//     “category” : “전자제품”,
//     “chat_count” : 5,
//     “likes” : 10,
//     “views” : 50,
//     “createdAt” : “2022-07-25T07:45:56.000Z”,
//     “updatedAt” : “2022-07-25T07:45:56.000Z”,
//     “is_sold” : “true”,
//     “photo_ip” : “https://www.xxxx.xxx”
//   }
// }
export const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const param = useParams();
  const { data } = useQuery(`product${param.id}`, () => getOneTradeProduct(param.id), {
    refetchOnWindowFocus: false,
    // staleTime: 600 * 1000,
  });

  useEffect(() => {
    if (data) {
      setProduct(data);
      console.log(data);
    }
  }, [data]);

  return (
    <div className="flex justify-center text-gray-600 min-w-[700px] w-full ">
      <div className="px-4 py-24 mx-7 max-w-[1200px] ">
        <GreenButton buttonText="Delete" clickHandler={() => deleteOneTradeProduct(1)} />
        {product && (
          <>
            <div className="min-h-[400px] min-w-[400px] h-[500px]">
              {!imageError ? (
                <img alt="product" className="object-cover h-full rounded-lg" src={product.photo_ip} onError={handleImageError} />
              ) : (
                <img alt="Placeholder" className="object-cover w-full h-full rounded-md" src="https://via.placeholder.com/420x260?text=Image" />
              )}
            </div>
            <div className="border-b border-gradient w-full mb-4"></div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">판매 정보</h3>
                <span className="font-medium">등록일: {dateConvert(product.createdAt)}</span>
              </div>
              <ul className="mt-2 text-gray-700 text-sm pl-1">
                <li>
                  <span className="font-medium">지역:</span> {product.address}
                </li>
                <li>
                  <span className="font-medium">판매 여부:</span> {product.is_sold ? "판매 완료" : "판매 중"}
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <div className="border-b border-gradient w-full mb-4"></div>
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-xs my-2 text-gray-500">{product.category}</p>
              <p className="text-lg font-bold text-gray-700">{product.price.toLocaleString()}원</p>
              <div className="mt-4 pl-1">
                <p className="mt-2 text-gray-700">{product.content}</p>
              </div>
              <div className="flex items-center mt-4">
                <AiFillHeart className="mr-1 text-red-500" />
                <span className="text-sm">{product.likes}</span>
                <GrView className="ml-4 mr-1 text-sm text-gray-500" />
                <span className="text-sm">{product.views}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
