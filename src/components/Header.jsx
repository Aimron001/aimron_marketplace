import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';


export default function Header(){
    const activeStyle = {
        color: 'rgb(255, 166, 0)',
        fontWeight: 'bold'
    }
    return (
        <header className="main-header">
            <div className='main-navbar'>
                <img src={logo} alt="aimron marketplace logo" className='logo'/>
                <nav className='navlinks'>
                    <NavLink 
                        style={ ({isActive}) => isActive ? activeStyle : null}
                        to='/'>
                        Home
                    </NavLink>
                    <NavLink 
                        style={ ({isActive}) => isActive ? activeStyle : null}
                        to='products'>
                        Products
                    </NavLink>
                    <NavLink 
                        style={ ({isActive}) => isActive ? activeStyle : null}
                        to='services'>
                        Services
                    </NavLink>
                    <NavLink 
                        style={ ({isActive}) => isActive ? activeStyle : null}
                        to='login'>
                        Login
                    </NavLink>
                    <NavLink 
                        style={ ({isActive}) => isActive ? activeStyle : null}
                        to='sign-up'>
                        Sign Up
                    </NavLink>
                </nav>
            </div>
            {/* <div className='hero-section'>
                <div className='hero-text'>
                    <h1>Welcome to <span>Aimron</span> Marketplace</h1>
                    <p>where shopping meets innovation, and your experience is our priority</p>
                </div>
                <Link to="buyer-or-seller" className='get-started-btn'>Get Started</Link>
            </div> */}
        </header>
    )
}