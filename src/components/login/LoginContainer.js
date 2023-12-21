import React from "react";
import Login from "./Login";
import axios, { HttpStatusCode } from "axios";
import $api, { API_URL } from '../../services/UrlService';
import { redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthUserData, setUsername, setPassword } from "../../common/reducer/auth-reducer";

class LoginContainer extends React.Component {

    onTryLogin = (username, password) => {
        axios
            .post(API_URL + "/login", {
                username,
                password
            }, {withCredentials: true})
            .then(response => {
                if (response.status === 200) {
                    this.props.setAuthUserData(response.data);
                }
            })
    }

    render() {
        return <Login
            {...this.props}
            onTryLogin={this.onTryLogin}
        />
    };
};

const mapStateToProps = (state) => ({
    player: state.auth.player,
    username: state.auth.username,
    password: state.auth.password
});

export default connect(mapStateToProps, {
    setAuthUserData,
    setUsername,
    setPassword
})(LoginContainer);