import React,{ useState} from 'react';
import './navbar.css'
import {  Link } from "react-router-dom"

const Navbar = () => {
    const [user,setUser] = useState(false)

    const handleLogin = () => {
        setUser(true);
    }
    const handleLogout = () => {
        setUser(false);
    }

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
            {user ? (
            <>
            <Link to="/logout"> 
            <button type='button' className='secondary-btn' onClick={handleLogout}>Выход</button>
            </Link>
            </>
            ): (
            <>
                <Link to="/login"> 
                    <button type='button' className='primary-btn' onClick={handleLogin}>Вход</button>
                </Link>
                <Link to="/register"> 
                    <button type='button' className='secondary-btn'>Регистрация</button>
                </Link>
            </>
            )}
            </div>
        </div>
        
    );
};

export default Navbar;