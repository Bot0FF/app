import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../common/reducer/auth-reducer";
import { Button } from '@mui/material';
import "./navbar.css";

class NavbarContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        return <>
            <div className="navbar">
                <div className="navbar-item--left">
                    {this.props.isAuth
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
                                    onClick={() => {this.setState({isOpen: !this.state.isOpen})}}
                                >
                                    Меню
                                </Button>
                            </div>
                            <nav className={`navbar-menu ${this.state.isOpen ? "active" : ""}`}>
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
                    {this.props.isAuth
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
                                onClick={() => this.props.logout()}
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
                                onClick={() => this.props.logout()}
                            >
                                Регистрация
                            </Button>
                        </NavLink>
                    }
                </div>
            </div>
        </>
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.authState.isAuth
});

export default connect(mapStateToProps, {
    logout
})(NavbarContainer);