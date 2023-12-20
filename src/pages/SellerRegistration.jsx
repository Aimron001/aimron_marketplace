import React from "react";
import BuyerPhoto from "../assets/images/buyer.png"

export default function SellerRegistration(){
    return (
        <div className="seller-registration-container">
            <h1>Register Your Business</h1>
            <form className="shop-info">
                <div className="shop-profile">
                    <div className="shop-logo-container">
                        <img src={BuyerPhoto} alt="shop's logo'" />
                        <input type="file" accept="image/png, image/jpeg" />
                    </div>
                </div>
                <div className="shop-form-data">
                    <div className="form-left">
                        <input type="text" name="fullname" placeholder="Full Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="text" name="businessName" placeholder="Business Name" />
                        <input type="text" name="category" placeholder="Category eg. stationeries" />
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-right">
                        <input type="text" name="phoneNumber" placeholder="Phone Number" />
                        <input type="text" name="nationalID" placeholder="National ID" />
                        <input type="text" name="type" placeholder="wholesale or retail" />
                        <input type="text" name="description" placeholder="Describe your business" />
                        {/* <input type="text" name="location" placeholder="Location" /> */}
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                    </div>
                </div>
                <button>Register</button>                
            </form>

        </div>
    )
}

 