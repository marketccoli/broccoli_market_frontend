import { useState } from "react";
import { dateConvert } from "../utils/dateConvert";
import { AiFillHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
// const product = {
//   product_id: 1,
//   title: "타이틀1",
//   address: "서울시 용산구",
//   price: "15000",
//   category: "전자제품",
//   likes: 10,
//   views: 50,
//   createdAt: "2022-07-25T07:45:56.000Z",
//   is_sold: false,
//   photo_ip: "https://dummyimage.com/420x260",
// };

export const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <Link to={`/product/${product.product_id}`}>
      <div className="p-4">
        {/* upper part of card(image) */}
        <div className="flex items-center justify-center h-72 md:h-52">
          {!imageError ? (
            <img alt="" className="object-cover h-full" src={product.photo_ip} onError={handleImageError} />
          ) : (
            <img alt="Placeholder" className="object-cover h-full" src="https://via.placeholder.com/420x260?text=Image" />
          )}
        </div>
        {/* lower, text part of card */}
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
          <p className="mt-1">{product.price.toLocaleString()}원</p>
          <span className="mt-1 text-xs">{product.address}</span>
          <div className="flex justify-between items-center pr-2">
            <span className="text-xs">{dateConvert(product.createdAt)}</span>
            <div className="flex items-center">
              <AiFillHeart className="mr-1 " color="red" />
              <span className="mr-2 text-sm">{product.likes}</span>
              <GrView className="mr-1 text-sm text-white" />
              <span className="text-sm">{product.views}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
