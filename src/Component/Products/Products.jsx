import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const[products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('./productData.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])
    return (
        <div>
            
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                 products.map(product => <Product key={product.productId} product={product}></Product>)
            }
           </div>
        </div>
    );
};

export default Products;