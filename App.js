// App.js
import React, {lazy, Suspense} from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';

import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
export * from "react-router";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';
import './index.js'
import "./src/index.css";
// import Grocery from './src/components/Grocery';

// LESSON 9 Topics //
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand loading
// Dynamic import

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense>,
            },
            {
                path: 'restaurants/:resId',
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />,
    },
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

//export default AppLayout;