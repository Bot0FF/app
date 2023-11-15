import React from 'react';
import { publicRoutes, privateRoutes } from '../routes/routes';
import { Routes, Route, Navigate } from "react-router-dom";

const AppRouters = () => {
    const isAuth = true;
    return (
        isAuth
        ?
        <Routes>
        {publicRoutes.map(route => 
            <Route 
              element={route.component} 
              path={route.path} 
              exact={route.exact}
              key={Date.now()}/>
          )}
        </Routes>
        :
        <Routes>
        {privateRoutes.map(route => 
            <Route 
              element={route.component} 
              path={route.path} 
              exact={route.exact}
              key={Date.now()}/>
          )}
        <Navigate to='/login'/>
        </Routes>
    );
};

export default AppRouters;