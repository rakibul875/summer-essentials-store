import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa6";

const ProductsCard = ({ product }) => {
  return (
    <div className="rounded-xl shadow-md bg-base-100 p-5 space-y-5">
      <div className="relative w-full aspect-square">
        <Image
          src={product.image}
          alt="Shoes"
          fill
          className="object-cover rounded-xl transition-transform duration-300 hover:scale-110"
        />
        <p className="bg-gray-200 px-1 py-3 flex justify-center rounded-full w-10 absolute top-2 right-2">
          <FaHeart color="orange" />
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-xl text-indigo-400">{product.category}</p>
        <p className="text-xl text-orange-400">${product.price}</p>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
      </div>
      <Link href={`/product/${product.id}`}>
        <button className="btn bg-orange-500 w-full text-white rounded-full">
          Show Details
        </button>
      </Link>
    </div>
  );
};

export default ProductsCard;
