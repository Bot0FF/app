import React from "react";
import Login from "./Login";
import MainContainer from "../main/MainContainer";
import axios from "axios";
import { API_URL } from '../../services/UrlService';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUsername, setPassword, setIsAuth } from "../../common/reducer/login-reducer";

class LoginContainer extends React.Component {

    onTryLogin = (username, password) => {
        axios
            .post(API_URL + "/login", {
                username,
                password
            }, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    this.props.setIsAuth(true);
                }
            })
            .catch(error => 
                this.props.setIsAuth(false)
            )
    }

    render() {
        return <>
            {
                this.props.isAuth
                    ?
                    <NavLink to="/im">
                        <MainContainer />
                    </NavLink>
                    :
                    <Login
                        setUsername={this.props.setUsername}
                        setPassword={this.props.setPassword}
                        username={this.props.username}
                        password={this.props.password}
                        onTryLogin={this.onTryLogin}
                    />
            }
        </>
    };
};

const mapStateToProps = (state) => ({
    player: state.auth,
    isAuth: state.loginPage.isAuth,
    username: state.loginPage.username,
    password: state.loginPage.password
});

export default connect(mapStateToProps, {
    setIsAuth,
    setUsername,
    setPassword
})(LoginContainer);