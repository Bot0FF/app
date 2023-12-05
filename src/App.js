import React, { useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Greeting from "./components/greeting/Greeting";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Main from "./components/main/Main";
import { Context } from "./index";
import { observer } from "mobx-react-lite";

const App = () => {
  const {stateUser} = useContext(Context);

  useEffect(() => {
    stateUser.checkAuth();
  });

  return (
    stateUser.isAuth
      ?
      <div>  
        <Navbar/>
        <Routes>
          <Route exact path="/im" element={<Main/>}/> 
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
