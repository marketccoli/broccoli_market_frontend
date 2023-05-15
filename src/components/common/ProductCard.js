import { useState } from "react";
import { dateConvert } from "../../utils/dateConvert";
import { AiFillHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link to={`/product/${product.product_id}`}>
      <div className="p-4">
        {/* Upper part of card (image) */}
        <div className="flex items-center justify-center h-72 md:h-52">
          {!imageError ? (
            <img alt="" className="object-cover w-full h-full rounded-md" src={product.photo_ip} onError={handleImageError} />
          ) : (
            <img alt="Placeholder" className="object-cover w-full h-full rounded-md" src="https://via.placeholder.com/420x260?text=Image" />
          )}
        </div>
        {/* Lower, text part of card */}
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
