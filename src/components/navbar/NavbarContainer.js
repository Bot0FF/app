import React from "react";
import NavbarTrue from "./NavbarTrue";
import NavbarFalse from "./NavbarFalse";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../common/reducer/auth-reducer";
import "./navbar.css";

class NavbarContainer extends React.Component {
    render() {
        return <>
            <div className="navbar">
                <NavLink to="/im">
                    <span>VezLand</span>
                </NavLink>
                {
                    this.props.isAuth
                        ?
                        <NavbarTrue
                            {...this.props.authState}
                            logout={this.props.logout}
                        />
                        :
                        <NavbarFalse
                            {...this.props.authState}
                        />
                }
            </div>
        </>
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.authState.isAuth
});

export default connect(mapStateToProps, {
    logout
})(NavbarContainer);