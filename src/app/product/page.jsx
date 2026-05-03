import Animated from "@/components/Animated";
import ProductsCard from "@/components/HomePage/ProductsCard";
import React from "react";

const page = async () => {
  const res = await fetch(
    "https://summer-essentials-store-xi.vercel.app/Data.json",
    { cache: "no-store" }
  );
  const data = await res.json();
  const products = data;
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="">
          <Animated products={products}/>
          {/* {products.map((product) => (
            <Animated  products={product}/>
            // <ProductsCard key={product.id} product={product} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default page;
