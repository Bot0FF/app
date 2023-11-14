import './App.css';
import Navbar from './components/Navbar';
import { Login } from './pages'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/login" element={ <Login />} />
        </Routes>
    </div>
  );
}

export default App;
