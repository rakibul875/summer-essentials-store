import React from "react";
import ProductsCard from "./ProductsCard";
import Link from "next/link";

const PopularProducts = async () => {
  const res = await fetch(
    "https://summer-essentials-store-xi.vercel.app/Data.json",
  );
  const data = await res.json();
  const products = data.slice(0, 3);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-10">
        <div className="flex flex-col gap-5 lg:flex-row justify-between mx-5">
          <div className="">
            <h1 className="text-xl text-gray-400">Popular Products</h1>
            <p className="text-lg text-gray-400">
              Hand-picked essentials for your next escape.
            </p>
          </div>
          <div className="">
            <Link href={'/product'}>
              <button className="btn btn-soft border-orange-400 text-orange-400">
                View All Products
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 p-5 lg:p-15 gap-5">
          {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
