import React, { useContext } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const Navbar = ({auth}) => {
    const { store } = useContext(Context);

    return (
        auth
            ?
            <div className="navbar">
                <div className="navbar-logo">
                    <h1>VezLand</h1>
                </div>
                <div className="navbar-sign">
                    <NavLink to="/">
                        <button
                            type="button"
                            className="primary-btn"
                            onClick={(e) => store.logout()}
                        >Выход
                        </button>
                    </NavLink>
                </div>
            </div>
            :
            <div className="navbar">
                <div className="navbar-logo">
                        <h1>VezLand</h1>
                </div>
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
    );
};

export default observer(Navbar);