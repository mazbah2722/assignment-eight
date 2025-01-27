import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import cart2 from '../../assets/cart2.png'
import heart from '../../assets/heart.png'
import { addToStoredCart, addToStoredWishlist } from '../../Utility/addToDb';

const ProductDetails = () => {

    const { productId } = useParams();
    const id = parseInt(productId)
    const data = useLoaderData();
    const product = data.find(product => product.productId === id)
    // console.log(productId, product)

    const handleMarkAsCart =(id) => {
        addToStoredCart(id);
    }
    const handleMarkAsWishlist =(id) => {
        addToStoredWishlist(id);
    }

    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl font-bold'>Product Details</h1>
            <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product.image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{product.title}</h1>
                        <p className="py-6 font-bold"> Price : $
                        {product.price} 
                        </p>
                        <button className="btn rounded-3xl bg-gray-100 text-black">In stock</button>
                        <p className='my-3'>{product.description}</p>
                        {
                            product.specification.map((specific,idx) => <ul key={idx}>{specific}</ul> )
                        }
                        <h3>Rating : {product.rating}</h3>
                        <div className='flex gap-2 my-4'>
                            <button onClick={() => handleMarkAsCart(productId)} className='btn bg-[#9538E2] rounded-xl'>Add to cart <img src={cart2} alt="" /></button>
                            <button onClick={() => handleMarkAsWishlist(productId)} className='btn rounded-full'> <img src={heart} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;