import React from 'react';
import ProductsCard from './ProductsCard';

const PopularProducts = async () => {
    const res = await fetch('https://summer-essentials-store-xi.vercel.app/Data.json')
    const data= await res.json()
    const products=data.slice(0,3)
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
            {
                products.map(product=> <ProductsCard key={product.id} product={product}/>)
            }
        </div>
    );
};

export default PopularProducts;