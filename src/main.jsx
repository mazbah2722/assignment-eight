import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Home from './Component/Home/Home.jsx';
import Statastics from './Component/Navbar/Statastics/Statastics.jsx';
import ProductDetails from './Component/ProductDetails/ProductDetails.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'products/:productId',
        element:<ProductDetails></ProductDetails>,
        loader: () => fetch('/productData.json')
      },
      {
        path:'/statistics',
        element:<Statastics></Statastics>
      },
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/productData.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
