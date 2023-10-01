import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
// import { StarIcon } from "@heroicons/react/20/solid";
import Currency from "react-currency-formatter";

const MAX_Rating = 5;
const Min_Rating = 1;

function Product({
  product: { id, title, price, description, category, image },
}) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_Rating - Min_Rating + 1)) + Min_Rating
  );
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400  ">
        {category}
      </p>
      <Image src={image} height={200} width={200} alt="images" />
      <h4 className="my-3">{title}</h4>

      {/* <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => {
            return <StarIcon key={i} className="h-4 text-yellow-500" />;
          })}
      </div> */}
      <p className="text-xs- my-2 line-clamp-2 ">{description}</p>
      <div>
        <Currency quantity={price} currency="INR" />
      </div>
      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
}

export default Product;
