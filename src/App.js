import React from "react";
import NavbarContainer from "./components/navbar/NavbarContainer";
import LoginContainer from "./components/login/LoginContainer";
import GreetingContainer from "./components/greeting/GreetingContainer";
import RegisterContainer from "./components/register/RegisterContainer";
import MainContainer from "./components/main/MainContainer";
import FightContainer from "./components/fight/FightContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import ChurchContainer from "./components/places/church/ChurchContainer";
import HomeContainer from "./components/places/home/HomeContainer";
import ShopContainer from "./components/places/shop/ShopContainer";
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
      <div className="app">
        <div className="navbar">
          <NavbarContainer />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<GreetingContainer />} />
            <Route path="/fight" element={<FightContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="/im" element={<MainContainer />} />
            <Route path="/fight" element={<FightContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/church/*" element={<ChurchContainer />} />
            <Route path="/home/*" element={<HomeContainer />} />
            <Route path="/shop/*" element={<ShopContainer />} />
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
