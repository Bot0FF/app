import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AppRouters from './common/AppRouters';
import AuthService from './services/auth.service';
import EventBus from './common/EventBus'

const App = () => {
  const[user, setUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser;

    if(user) {
      setUser(user);
    }

    EventBus.on('logout', () => {
      logout();
    });

    return () => {
      EventBus.remove('logout');
    }
  }, []);

  const logout = () => {
    AuthService.logout();
    setUser(undefined);
  }

  return (
    <div>
      <Navbar/>
      <AppRouters/>
     </div>
  );
};

export default App;
