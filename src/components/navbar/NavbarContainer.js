import React from "react";
import NavbarTrue from "./NavbarTrue";
import NavbarFalse from "./NavbarFalse";
import { connect } from "react-redux";
import { logout } from "../../common/reducer/login-reducer";
import "./navbar.css";

class NavbarContainer extends React.Component {
    render() {
        return <>
            <div className="navbar">
                <div className="navbar-logo">
                    <h1>VezLand</h1>
                </div>
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