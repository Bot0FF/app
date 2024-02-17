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
                player={this.props.player}
            />
        </>
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.authState.isAuth,
    player: state.fightState.player
});

export default connect(mapStateToProps, {
    logout
})(NavbarContainer);