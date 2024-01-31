import React from "react";
import { connect } from "react-redux";
import { logout } from "../../common/reducer/auth-reducer";
import "./navbar.css";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {

    render() {
        return <>
            <Navbar
                isAuth={this.props.isAuth}
                logout={this.props.logout}
            />
        </>
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.authState.isAuth
});

export default connect(mapStateToProps, {
    logout
})(NavbarContainer);