import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavbarFalse = (props) => {
    return (
        <div>
            <div className="navbar-sign">
                <NavLink to="/login">
                    <button
                        type="button"
                        className="primary-btn"
                    >Вход
                    </button>
                </NavLink>
                <NavLink to="/register">
                    <button
                        type="button"
                        className="secondary-btn"
                    >Регистрация
                    </button>
                </NavLink>
            </div>
        </div>
    )
};

export default NavbarFalse;