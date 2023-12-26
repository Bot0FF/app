import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { setAuth } from "../../common/reducer/login-reducer";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";

class LoginContainer extends React.Component {

    handleSubmit = (formData) => {
        this.props.setAuth(formData);
    }

    render() {
        return <>
            {
                this.props.isAuth
                    ?
                    <Navigate replace to="/im" />
                    :
                    <LoginReduxForm
                        onSubmit={this.handleSubmit}
                        isAuth={this.props.isAuth}
                    />
            }
        </>
    };
};

const LoginReduxForm = reduxForm({form: "login"})(Login);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    setAuth
})(LoginContainer);