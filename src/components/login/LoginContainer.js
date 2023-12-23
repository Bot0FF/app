import React from "react";
import Login from "./Login";
import MainContainer from "../main/MainContainer";
import { connect } from "react-redux";
import { setUsername, setPassword, setAuth } from "../../common/reducer/login-reducer";

class LoginContainer extends React.Component {

    onTryLogin = (username, password) => {
        this.props.setAuth(username, password);
    }

    render() {
        return <>
            {
                this.props.isAuth
                    ?
                    <MainContainer />
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
    setAuth,
    setUsername,
    setPassword
})(LoginContainer);