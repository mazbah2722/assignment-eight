import React from 'react';
import Products from '../Products/Products';
import Categories from '../Categories/Categories';

const ProductContainer = () => {
    return (
        <div>
            <h1 className='text-center text-3xl my-16'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex'>
                <div className='w-1/4'>
                    <Categories></Categories>
                </div>
                <div>
                   
                    <Products></Products>
                </div>
            </div>
        </div>
    );
};

export default ProductContainer;