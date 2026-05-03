"use client";

import { useTrail, animated } from "@react-spring/web";
import ProductsCard from "@/components/HomePage/ProductsCard";

const Animated = ({ products: product }) => {
  const trail = useTrail(product.length, {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 lg:p-15 gap-5">
      {trail.map((style, index) => (
        <animated.div key={product[index].id} style={style}>
          <ProductsCard product={product[index]} />
        </animated.div>
      ))}
    </div>
  );
};

export default Animated;