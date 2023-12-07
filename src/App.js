import React, { useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Greeting from "./components/greeting/Greeting";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Main from "./components/main/Main";
import {checkAuth} from "./services/AuthService"
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import Dialogs from "./components/mail/Dialogs";

const App = (props) => {
  const {stateUser} = useContext(Context);

  useEffect(() => {
    checkAuth();
  });

  return (
    stateUser.isAuth
      ?
      <div>  
        <Navbar/>
        <Routes>
          <Route path="/im" element={<Main/>}/> 
          <Route path="/mail/*" element={<Dialogs mail={props.mail}/>}/> 
        </Routes>
      </div>  
      :
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Greeting/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/>
      </Routes>
      </div>
  );
};

export default observer(App);
