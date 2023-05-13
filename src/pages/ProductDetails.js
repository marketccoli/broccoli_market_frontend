import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getOneTradeProduct } from "../api/api";
import { dateConvert } from "../utils/dateConvert";
import { AiFillHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
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
    <div className="p-4 mt-16">
      {product && (
        <>
          <div className="flex items-center justify-center">
            <img alt="product" className="object-cover h-64 w-64 rounded-lg" src={product.photo_ip} />
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-lg mt-2 text-gray-700">{product.price.toLocaleString()}원</p>
            <span className="text-sm text-gray-500">{product.category}</span>
            <div className="flex items-center mt-4">
              <AiFillHeart className="mr-1 text-red-500" />
              <span className="text-sm">{product.likes}</span>
              <GrView className="ml-4 text-sm text-gray-500" />
              <span className="text-sm">{product.views}</span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">상품 설명</h3>
              <p className="mt-2 text-gray-700">{product.content}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">판매 정보</h3>
              <ul className="mt-2 text-gray-700">
                <li>
                  <span className="font-medium">카테고리:</span> {product.category}
                </li>
                <li>
                  <span className="font-medium">지역:</span> {product.address}
                </li>
                <li>
                  <span className="font-medium">판매 여부:</span> {product.is_sold ? "판매 완료" : "판매 중"}
                </li>
                <li>
                  <span className="font-medium">등록일:</span> {dateConvert(product.createdAt)}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
