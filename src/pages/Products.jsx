import React from "react";
import Product from "../components/Product"
import { Link } from "react-router-dom";

export default function Products() {
    return(
        <div className="container">
            <Link to="/dashboard" className="dashboard-link">My Dashboard</Link>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}