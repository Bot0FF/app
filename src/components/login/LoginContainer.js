import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { setAuthData } from "../../common/reducer/main-reducer";
import { Navigate } from "react-router-dom";

class LoginContainer extends React.Component {

    handleSubmit = (formData) => {
        this.props.setAuthData(formData);
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
    isAuth: state.mainState.isAuth
});

export default connect(mapStateToProps, {
    setAuthData
})(LoginContainer);