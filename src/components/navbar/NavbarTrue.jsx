import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavbarTrue = (props) => {

    const logout = () => {
        props.logout();
    }

    return (
        <div>
            <div className="navbar-sign">
                <NavLink to="/">
                    <button
                        onClick={logout}
                        type="button"
                        className="primary-btn"
                    >Выход
                    </button>
                </NavLink>
            </div>
        </div>
    )
};

export default NavbarTrue;