import Image from "next/image";
import React from "react";

const ProductsCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={product.image}
          alt="Shoes"
          width={300}
          height={300}
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <div className="card-actions">
          <button className="btn bg-orange-500 w-full rounded-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
