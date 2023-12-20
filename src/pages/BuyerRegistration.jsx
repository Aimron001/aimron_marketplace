import React from "react";
import { Link } from "react-router-dom"
import BuyerPhoto from "../assets/images/buyer.png"

export default function BuyerRegistration(){
    return (
        <div className="buyer-signup-container">
            <h1>Sign Up</h1>
            <div className="form-container">
                <form className="buyer-registration-form">
                    <div className="user-photo-container">
                        <img src={BuyerPhoto} alt="Buyers profile photo" />
                        <input type="file" accept="image/png, image/jpeg" />
                    </div>

                    <div className="form-data">
                        <input type="text" name="fullname" placeholder="Full Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="text" name="phoneNumber" placeholder="Phone Number" />
                        <input type="text" name="location" placeholder="Location" />
                        <input type="password" name="password" placeholder="Password" />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                    </div>
                    <div className="signup-container">
                        <button>Sign Up</button>
                        <Link>Already have an account?</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}