import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
    render() {
        return <Navbar {...this.props.state}/>
    };
};

const mapStateToProps = (state) => ({
    state: state.mainState
});

export default connect(mapStateToProps, {}) (NavbarContainer);