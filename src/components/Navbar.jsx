import React from 'react';
import './navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <Link to="/"> 
                    <h1>VezLand</h1>
                    </Link>
                </div>
            </div>
            <div className="navbar-sign">
                <Link to="/login"> 
                    <button type='button' className='primary-btn'>Вход</button>
                </Link>
                <Link to="/register"> 
                    <button type='button' className='secondary-btn'>Регистрация</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;