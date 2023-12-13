import React, { useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Greeting from "./components/greeting/Greeting";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Main from "./components/main/Main";
import MailContainer from "./components/mail/MailContainer";
import LibraryContainer from "./components/library/LibraryContainer";

const App = () => {
  return (
    true
      ?
      <div>  
        <Navbar/>
        <Routes>
          <Route path="/im" element={<Main/>}/> 
          <Route path="/mail/*" element={<MailContainer/>}/> 
          <Route path="/library" element={<LibraryContainer/>}/> 
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

export default App;
