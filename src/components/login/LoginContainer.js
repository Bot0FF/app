import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { setAuth } from "../../common/reducer/auth-reducer";
import { Navigate } from "react-router-dom";

class LoginContainer extends React.Component {

    handleSubmit = (formData) => {
        this.props.setAuth(formData);
    };

    render() {
        return <>
            {
                this.props.isAuth
                    ?
                    <Navigate replace to="/im" />
                    :
                    <Login
                        handleSubmit={this.handleSubmit}
                        isAuth={this.props.isAuth}
                    />
            }
        </>
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.authState.isAuth
});

export default connect(mapStateToProps, {
    setAuth
})(LoginContainer);