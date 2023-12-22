import React from "react";
import Login from "./Login";
import MainContainer from "../main/MainContainer";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUsername, setPassword, setIsAuth } from "../../common/reducer/login-reducer";
import { API } from "../../api/api";

class LoginContainer extends React.Component {

    onTryLogin = (username, password) => {
        API.setAuth(username, password)
            .then(data => {
                if (data.status === "OK") {
                    this.props.setIsAuth(true);
                }
                else{
                    this.props.setIsAuth(false)
                }
            });
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