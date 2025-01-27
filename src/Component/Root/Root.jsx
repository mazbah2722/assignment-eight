import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useNavigation } from 'react-router-dom';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            {
                 navigation.state === "loading" ? <p>Loading...</p>:  <Outlet></Outlet>
            }
           
            <Footer></Footer>
        </div>
    );
};

export default Root;