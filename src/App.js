import React from "react";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import MainContainer from "./components/main/MainContainer";
import MailContainer from "./components/mail/MailContainer";
import LibraryContainer from "./components/library/LibraryContainer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    true
      ?
      <div>  
        <Navbar/>
        <Routes>
          <Route path="/im" element={<MainContainer/>}/> 
          <Route path="/mail/*" element={<MailContainer/>}/> 
          <Route path="/library" element={<LibraryContainer/>}/> 
        </Routes>
      </div>  
      :
      <div>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/>
      </Routes>
      </div>
  );
};

export default App;
