import React, { useState, useRef } from 'react';
import './login.css'
import AuthService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom';

const required = (value) => {
    if (!value) {
      return (
        <div className="invalid-feedback d-block">
          This field is required!
        </div>
      );
    }
};

const Login = () => {
    const form = useRef();
    const checkBtn = useRef();
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  
    const navigate = useNavigate();
  
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();

      setMessage("");
      setLoading(true);

      if(true) {
        AuthService.login(username, password).then(
            () => {              
                navigate('/main');
                window.location.reload();
            },
            (error) => {
                const reqMessage = error.toString();

                setLoading(false);
                setMessage(reqMessage);
            }
        );
      } 
      else {
        setLoading(false);
      }
    };

    return (
        <div className='login section__padding'>
            <div className="login-container">
                <h1>Вход</h1>
                <form className='login-writeForm' autoComplete='off' onSubmit={handleLogin} ref={form}>
                    <div className="login-formGroup">
                        <label>Логин</label>
                        <input 
                            type="text" 
                            placeholder='Username' 
                            value={username}
                            onChange={onChangeUsername}
                        />
                    </div>
                    <div className="login-formGroup">
                        <label>Пароль</label>
                        <input 
                            type="password" 
                            placeholder='Password' 
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>
                    <div className="login-button">
                        <button 
                            className='login-writeButton' 
                            type='submit'
                            >Войти
                        </button>
                    </div>
                </form>
            </div>
      </div>
    );
};

export default Login;