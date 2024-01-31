import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';
import { NavLink } from "react-router-dom";
import { useClickOutside } from './../../common/hook/useClickOutside';

const Navbar = (props) => {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if(isOpen) setTimeout(() => setOpen(!isOpen), 50);
    });

    return (
        <div className="navbar">
            <div className="navbar-item--left">
                {props.isAuth
                    ?
                    <>
                        <div className="navbar-menu--button">
                            <Button
                                variant="bold"
                                style={{
                                    color: "#8b6e6e",
                                    border: "2px solid #493a3a",
                                    fontWeight: "bold",
                                    borderRadius: "6px",
                                    width: "100px"
                                }}
                                onClick={() => { setOpen(!isOpen) }}
                            >
                                Меню
                            </Button>
                        </div>
                        <nav className={`navbar-menu ${isOpen ? "active" : ""}`} ref={menuRef}>
                            <ul className="navbar-menu--list">
                                <li className="menu-list--item">Профиль</li>
                                <li className="menu-list--item">Почта</li>
                                <li className="menu-list--item">Магазин</li>
                            </ul>
                        </nav>
                    </>
                    :
                    <NavLink to="/login">
                        <Button
                            variant="bold"
                            style={{
                                color: "#8b6e6e",
                                border: "2px solid #493a3a",
                                fontWeight: "bold",
                                borderRadius: "6px",
                                width: "100px"
                            }}
                        >
                            Вход
                        </Button>
                    </NavLink>
                }
            </div>
            <div className="navbar-logo">
                <NavLink to="/im">
                    VezLand
                </NavLink>
            </div>
            <div className="navbar-item--right">
                {props.isAuth
                    ?
                    <NavLink to="/">
                        <Button
                            variant="bold"
                            style={{
                                color: "#8b6e6e",
                                border: "2px solid #493a3a",
                                fontWeight: "bold",
                                borderRadius: "6px",
                                width: "100px"
                            }}
                            onClick={() => props.logout()}
                        >
                            Выход
                        </Button>
                    </NavLink>
                    :
                    <NavLink to="/register">
                        <Button
                            variant="bold"
                            style={{
                                color: "#8b6e6e",
                                border: "2px solid #493a3a",
                                fontWeight: "bold",
                                borderRadius: "6px",
                            }}
                            onClick={() => props.logout()}
                        >
                            Регистрация
                        </Button>
                    </NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;