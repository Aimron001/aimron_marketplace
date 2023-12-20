import React from "react";
import { Link } from "react-router-dom"

export default function BuyerOrSeller(){
    return (
        <div className="buyer-or-seller">
            <form>
                <h1> Sign Up as a</h1>
                <div className="buyer-radio">
                    <input type="radio" id="buyer" name="account"/>
                    <label htmlFor="buyer"> Buyer</label>   
                </div>
                <div className="buyer-radio">
                    <input type="radio" id="seller" name="account"/>
                    <label htmlFor="seller">Seller</label>
                </div>
            </form>
            <Link>Next</Link>
        </div>
    )
}