import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
    return (
        <div>
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
            {
                props.httpStatus
                    ?
                    < div >
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
                    </div >
                    :
                    <div />
            }
        </div>
    )
};

export default Navbar;