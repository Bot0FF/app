import React from "react";
import NavbarContainer from "./components/navbar/NavbarContainer";
import LoginContainer from "./components/login/LoginContainer";
import GreetingContainer from "./components/greeting/GreetingContainer";
import RegisterContainer from "./components/register/RegisterContainer";
import MainContainer from "./components/main/MainContainer";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./common/reducer/app-reducer";
import { Preloader } from './common/preloader/Preloader';
import "./App.css";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialize) {
      return <Preloader/>
    }

    return (
      <div>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<GreetingContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/im/*" element={<MainContainer />} />
        </Routes>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  initialize: state.app.initialize
});

export default connect(mapStateToProps, {initializeApp})(App);
