import { Link } from "@mui/material";
import React, { useState } from "react";

export default function Login(){
    const [formData, setFormData] = useState({username: "", password:"", account:""})
    
    const accountChangeHandler= (event) => {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    return (
        <div className="login-ontainer">
            <form>
                <fieldset>
                    <legend>Login as</legend>
                    <input type="radio" name="user" id="buyer" value="buyer" checked={formData.account === "buyer"} onChange={accountChangeHandler}/>
                    <label htmlFor="buyer">Buyer</label>
                    <input type="radio" name="user" id="seller" value="seller" checked={formData.account === "seller"} onChange={accountChangeHandler}/>
                    <label htmlFor="seller">Seller</label>
                </fieldset>
                <label htmlFor="username">{formData.account == "buyer" ? 'Username' : 'Business Name'}</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <Link >Forgot Password</Link>
                <button>Login</button>
            </form>
        </div>
    )
}