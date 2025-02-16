// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
    },
    {
        path: '/about',
        element: <About />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

//export default AppLayout;