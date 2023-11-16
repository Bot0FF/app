import React from 'react';
import { Routes, Route } from "react-router-dom";

import Greeting from '../pages/greeting/Greeting';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Main from '../pages/main/Main';
import AuthService from '../services/auth.service';

const AppRouters = () => {

  const user = AuthService.getCurrentUser();

    return (
        user
        ?
        <Routes>
          <Route exact path='/main' element={<Main/>}/> 
        </Routes>
        :
        <Routes>
          <Route exact path='/' element={<Greeting/>}/> 
          <Route exact path='/login' element={<Login/>}/> 
          <Route exact path='/register' element={<Register/>}/> 
        </Routes>
    );
};

export default AppRouters;