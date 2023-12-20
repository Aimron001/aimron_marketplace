import React from "react";
import ShoppingItemImage from "../assets/images/marketplace.jpg"

export default function ShoppingItem(){
    return (
        <div className="shopping-item-card">
            <img src={ShoppingItemImage} />
            <div className="shopping-item-description"> 
                <h4>Bluetooth Speaker</h4>  
                <p> Ksh. 1250</p>
                <div className="shopping-list-btns">
                    <button>Delete</button>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}