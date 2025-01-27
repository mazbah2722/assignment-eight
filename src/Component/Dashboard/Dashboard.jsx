import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCart } from '../../Utility/addToDb';

const Dashboard = () => {

    const allBooks = useLoaderData();

    useEffect( () =>{
        const storedCartList = getStoredCart();
        console.log(storedCartList, allBooks)
    },[])
    return (
        <div>
           
            <Tabs>
    <TabList className="flex justify-center items-center">
      <Tab>Cart</Tab>
      <Tab>WishList</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Dashboard;