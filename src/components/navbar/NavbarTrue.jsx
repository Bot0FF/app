import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavbarTrue = (props) => {
    return (
        <div>
            <div className="navbar-sign">
                <NavLink to="/">
                    <button
                        onClick={props.logout()}
                        type="button"
                        className="primary-btn"
                    >Выход
                    </button>
                </NavLink>
            </div>
            <div>
                <NavLink to="/im">
                    <button>Главная</button>
                </NavLink>
            </div>
            <div>
                <NavLink to="/mail">
                    <button>Почта</button>
                </NavLink>
            </div>
            <div>
                <NavLink to="/library">
                    <button>Библиотека</button>
                </NavLink>
            </div>
            <div>
                <NavLink to="/players">
                    <button>Игроки</button>
                </NavLink>
            </div>
        </div>
    )
};

export default NavbarTrue;