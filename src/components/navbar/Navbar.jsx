import React, { useContext } from 'react';
import './navbar.css'
import { Link } from "react-router-dom"
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

const Navbar = () => {
    const {store} = useContext(Context);

    return (
        store.isAuth
        ?
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <Link to="/"> 
                    <h1>VezLand</h1>
                    </Link>
                </div>
            </div>
            <div className="navbar-sign">
                <Link to="/logout"> 
                    <button 
                        type='button' 
                        className='primary-btn'
                        >Выход
                    </button>
                </Link>
            </div>
        </div>
        :
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
                    <button 
                        type='button' 
                        className='primary-btn'
                        >Вход
                    </button>
                </Link>
                <Link to="/register"> 
                    <button 
                        type='button' 
                        className='secondary-btn'
                        >Регистрация
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default observer(Navbar);