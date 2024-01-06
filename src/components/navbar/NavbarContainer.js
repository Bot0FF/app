import React from "react";
import NavbarTrue from "./NavbarTrue";
import NavbarFalse from "./NavbarFalse";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../common/reducer/main-reducer";
import "./navbar.css";

class NavbarContainer extends React.Component {
    render() {
        return <>
            <div className="navbar">
                <NavLink to="/im">
                    <div className="navbar-logo">
                        VezLand
                    </div>
                </NavLink>
                {
                    this.props.mainState.isAuth
                        ?
                        <NavbarTrue
                            {...this.props.mainState}
                            logout={this.props.logout}
                        />
                        :
                        <NavbarFalse
                            {...this.props.mainState}
                        />
                }
            </div>
        </>
    };
};

const mapStateToProps = (state) => ({
    mainState: state.mainState
});

export default connect(mapStateToProps, { logout })(NavbarContainer);