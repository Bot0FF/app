import React from "react";
import Register from './Register';
import MainContainer from "../main/MainContainer";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { tryRegister } from "../../common/reducer/register-reducer";

class LoginContainer extends React.Component {

    onTryRegister = (formData) => {
        this.props.tryRegister(formData);
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
                        onTryRegister={this.onTryRegister}
                    />
            }
        </>
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.registerPage.isAuth,
});

export default connect(mapStateToProps, {
    tryRegister
})(LoginContainer);