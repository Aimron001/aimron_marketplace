import React from "react";
import { Link, Outlet } from "react-router-dom";
import buyerPhoto from "../assets/images/logo.jpg"


export default function BuyersLayout(){
    return (
        <div className="buyer-dashboard">
            <div className="buyers-sidebar">
                <div className="buyer-profile">
                    <img src={buyerPhoto} alt="buyer's profile photo" className="profile-photo" />
                    <h3>Ronald Mutua</h3>
                </div>
                <div className="sidebar-navlinks">
                    <Link to=".">Monthly goals</Link>
                    <Link to="purchases">Purchases</Link>
                    <Link to="expenses">Expenses</Link>
                    <Link to="shopping-list">Shopping List</Link>
                    <Link to="buyer-account">My Account</Link>
                </div>
            </div>

            <div className="buyer-dashboard-pages-container">
                <Outlet />
            </div>
        </div>
    )
}