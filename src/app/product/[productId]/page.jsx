import Image from "next/image";
import React from "react";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { RiShoppingBag2Fill } from "react-icons/ri";

const ProductsDetails = async ({ params }) => {
  const { productId } = await params;
  const res = await fetch(
    "https://summer-essentials-store-xi.vercel.app/Data.json",
    { cache: "no-store" },
  );
  const products = await res.json();

  const product = products.find((p) => p.id == productId);
  console.log(product);

  return (
    <div className="container mx-auto my-10">
      <div className="card flex-col lg:flex-row card-side w-90 lg:w-200 mx-auto bg-base-100 shadow-sm">
        <figure className="relative w-full lg:w-2/3 aspect-square">
          <Image src={product.image} alt={product.name} fill
          className="object-cover rounded-xl transition-transform duration-300 hover:scale-110" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{product.name}</h2>
          <div className="space-y-2">
            <p className="text-2xl font-semibold">{product.description}</p>
            <p className="text-xl text-orange-400"><span className="text-black">Brand:</span> {product.brand}</p>
            <p className="text-4xl font-semibold text-orange-500"><span className="text-black">Price:</span> ${product.price}</p>
            <p className="text-2xl flex items-center gap-1"><FaStar /> <FaRegStarHalfStroke />{product.rating}</p>
            <p className="text-red-400 text-2xl"><span className="text-black">Stock:</span> {product.stock}</p>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-outline border-orange-500 text-orange-500"><MdShoppingCart />Add to Card</button>
            <button className="btn bg-orange-500 rounded-md text-white"><RiShoppingBag2Fill />ByNow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
