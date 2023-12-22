import React from 'react';
import Buyer from '../components/BuyersFeatures';
import Seller from '../components/SellersFeatures';

export default function Home()  {
    return (
        <div className="container">
            
            <main>
                <Buyer />
                <Seller />
            </main>
        </div>
    )
}