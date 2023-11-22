import React, { useContext, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Greeting from './components/greeting/Greeting'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Main from './components/main/Main'
import { Context } from '.';
import {observer} from "mobx-react-lite";

const App = () => {
  const {store} = useContext(Context);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  return (
    <div>
      <Navbar/>

      <Routes>
          <Route exact path='/' element={<Greeting/>}/> 
          <Route exact path='/login' element={<Login/>}/> 
          <Route exact path='/register' element={<Register/>}/> 
          <Route exact path='/main' element={<Main/>}/> 
        </Routes>
     </div>
  );
};

export default observer(App);
