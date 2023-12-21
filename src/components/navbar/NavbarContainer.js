import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
    render() {
        return <Navbar {...this.props}/>
    };
};

const mapStateToProps = (state) => ({
    player: state.auth.player
});

export default connect(mapStateToProps, {}) (NavbarContainer);