import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral '>
            <div className='pt-10'>
            <h1 className='text-center text-3xl font-bold '>Gadget Heaven</h1>
            <p className='text-center'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer flex flex-col md:flex-row justify-evenly   p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                    
                   
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of services</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;