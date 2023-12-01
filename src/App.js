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
  const {store} = useContext(Context);

  useEffect(() => {
    if(localStorage.getItem('accessToken')) {
      store.checkAuth();
    }
  }, []);

  if(store.isLoading) {
    return <div><h1>Загрузка...</h1></div>
  }

  return (

    store.isAuth
      ?
      <div>  
        <Navbar auth={true}/>
        <Routes>
          <Route exact path="/im" element={<Main/>}/> 
        </Routes>
      </div>  
      :
      <div>
        <Navbar auth={false}/>
        <Routes>
          <Route path="/" element={<Greeting/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/>
      </Routes>
      </div>
  );
};

export default observer(App);
