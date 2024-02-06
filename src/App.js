import React from "react";
import NavbarContainer from "./components/navbar/NavbarContainer";
import LoginContainer from "./components/login/LoginContainer";
import GreetingContainer from "./components/greeting/GreetingContainer";
import RegisterContainer from "./components/register/RegisterContainer";
import MainContainer from "./components/main/MainContainer";
import FightContainer from "./components/fight/FightContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import Inventory from "./components/profile/Inventory";
import { initializeApp } from "./common/reducer/auth-reducer";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Preloader } from './common/preloader/Preloader';
import "./App.css";


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialize) {
      return <Preloader />
    }

    return (
      <div>
        <div className="navbar">
          <NavbarContainer />
        </div>
        <div className="header">
          <Routes>
            <Route path="/" element={<GreetingContainer />} />
            <Route path="/fight" element={<FightContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="/im" element={<MainContainer />} />
            <Route path="/fight" element={<FightContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
          </Routes>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  initialize: state.authState.initialize
});

export default connect(mapStateToProps, { initializeApp })(App);
