import React,{ useState} from 'react';
import './navbar.css'
import {  Link } from "react-router-dom"

const Navbar = () => {
    const [user,setUser] = useState(false)

    const handleLogin = () => {
        setUser(true);
    }


    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <h1>VezLand</h1>
                </div>
            </div>
            <div className="navbar-sign">
            {user ? (
            <>
                <Link to="/create"> 
                     <button type='button' className='primary-btn' >Create</button>
                </Link>
                <button type='button' className='secondary-btn'>Connect</button>
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