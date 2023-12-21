import React from "react";
import NavbarContainer from "./components/navbar/NavbarContainer";
import LoginContainer from "./components/login/LoginContainer";
import Register from "./components/register/Register";
import MainContainer from "./components/main/MainContainer";
import MailContainer from "./components/mail/MailContainer";
import PlayersContainer from "./components/players/PlayersContainer";
import LibraryContainer from "./components/library/LibraryContainer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import GreetingContainer from "./components/greeting/GreetingContainer";

const App = () => {
  return (
    <div>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<GreetingContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/im" element={<MainContainer />} />
        <Route path="/mail/*" element={<MailContainer />} />
        <Route path="/library" element={<LibraryContainer />} />
        <Route path="/players" element={<PlayersContainer />} />
      </Routes>
    </div>
  );
};

export default App;
