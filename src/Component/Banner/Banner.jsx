import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero bg-[#9538E2] min-h-screen relative md:mb-80">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with
                        <br /> Gadget Heaven Accessories</h1>
                    <p className="py-6">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                    </p>
                    <button className="btn bg-white text-black border-none rounded-2xl">Shop now</button>
                </div>
            </div>
            <div className='hidden md:block absolute -bottom-56 left-40'>
                <img className='w-[800px] h-[400px] rounded-2xl' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;