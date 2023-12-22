import React from "react";
import { Outlet, Link } from 'react-router-dom';
import buyerPhoto from "../assets/images/logo.jpg"
export default function SellersLayout(){
    return (
        <div className="buyer-dashboard">
            <div className="buyers-sidebar">
                <div className="buyer-profile">
                    <img src={buyerPhoto} alt="buyer's profile photo" className="profile-photo" />
                    <h3>Mwanco Magnate</h3>
                </div>
                <div className="sidebar-navlinks">
                    <Link to=".">Dashboard</Link>
                    <Link to="orders">Orders</Link>
                    <Link to="sales">Sales</Link>
                    <Link to="expenses">Expenses</Link>
                    <Link to="stock">Stock</Link>
                    <Link to="employees">Employees</Link>
                    <Link to="shop-info">Shop Info</Link>
                </div>
            </div>

            <div className="buyer-dashboard-pages-container">
                <Outlet />
            </div>
        </div>
    )
}