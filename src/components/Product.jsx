import React from "react";
import productImage from "../assets/images/marketplace.jpg"


export default function Product() {
    return (
        <div className="product-card">
            <img src={productImage} className="productImage"/>
            <div className="about-product">
                <h4>Laptop</h4>
                <p>The product descriptions goes here</p>
                <h5>Mwanco Magnate</h5>
                <p>Ksh. 9,000</p>
                <button className="add-cart-btn">Add to Cart</button>
            </div>
        </div>
    )
}