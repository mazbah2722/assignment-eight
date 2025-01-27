import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {productId,image,title,price} = product;
    return (
        <div>
            <div className="card bg-base-100 w-64 shadow-xl">
                <figure>
                    <img className='h-[170px]'
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price : {price} $</p>
                    
                       <Link to={`/products/${productId}`}> <button className="btn rounded-3xl bg-gray-100 text-black">View More</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;