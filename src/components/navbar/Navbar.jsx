import React, { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { useClickOutside } from './../../common/hook/useClickOutside';
import { NavbarButton } from './../../common/util/button/NavbarButton';

const Navbar = (props) => {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);

    const checkFight = (bool) => {
        if(props.player.status !== "FIGHT") {
            setOpen(bool);
        }
    }

    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setOpen(!isOpen), 50);
    });

    return (<>
        <div className="navbar-item--left">
            {props.isAuth
                ?
                <>
                    <div className="navbar-menu--button">
                        <NavbarButton
                            name={"Меню"}
                            onClick={() => { checkFight(!isOpen) }}
                        />
                    </div>
                    <nav className={`navbar-menu ${isOpen ? "active" : ""}`} ref={menuRef}>
                        <ul className="navbar-menu--list">
                            <NavLink
                                to="/profile"
                                className="menu-list--item"
                                onClick={() => { setOpen(!isOpen) }}
                            >
                                Профиль
                            </NavLink>
                            <NavLink
                                to="/messanger"
                                className="menu-list--item"
                                onClick={() => { setOpen(!isOpen) }}
                            >
                                Почта
                            </NavLink>
                            <NavLink
                                to="/shop"
                                className="menu-list--item"
                                onClick={() => { setOpen(!isOpen) }}
                            >
                                Магазин
                            </NavLink>
                        </ul>
                    </nav>
                </>
                :
                <NavLink to="/login">
                    <NavbarButton
                        name={"Вход"}
                        onClick={() => { }}
                    />
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
                    <NavbarButton
                        name={"Выход"}
                        onClick={() => props.logout()}
                    />
                </NavLink>
                :
                <NavLink to="/register">
                    <NavbarButton
                        name={"Регистрация"}
                        onClick={() => { }}
                    />
                </NavLink>
            }
        </div>
    </>
    );
};

export default Navbar;