import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AppRouters from './routes/AppRouters';



function App() {

  return (
    <div>
      <Navbar/>
      <AppRouters/>
    </div>
  );
}

export default App;
