// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './src/components/Header';
import Body from './src/components/Body';

/**
 * Header
 *  - Logo
 *  - Navigation
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *     - Image
 *     - Name of Res, Start Rating, cusiine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact  
 */






 
    
      





const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);

export default AppLayout;