import React from "react";
import Register from './Register';
import MainContainer from "../main/MainContainer";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUsername, setEmail, setPassword, tryRegister } from "../../common/reducer/register-reducer";

class LoginContainer extends React.Component {

    onTryRegister = (username, email, password) => {
        this.props.tryRegister(username, email, password);
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
                    <Register
                        setUsername={this.props.setUsername}
                        setEmail={this.props.setEmail}
                        setPassword={this.props.setPassword}
                        username={this.props.username}
                        email={this.props.email}
                        password={this.props.password}
                        onTryRegister={this.onTryRegister}
                    />
            }
        </>
    };
};

const mapStateToProps = (state) => ({
    player: state.auth,
    isAuth: state.registerPage.isAuth,
    username: state.registerPage.username,
    email: state.registerPage.email,
    password: state.registerPage.password
});

export default connect(mapStateToProps, {
    tryRegister,
    setEmail,
    setUsername,
    setPassword
})(LoginContainer);