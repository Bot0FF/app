import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div className='login section__padding'>
            <div className="login-container">
                <form className='login-writeForm' autoComplete='off'>
                    <div className="login-formGroup">
                        <label>Логин</label>
                        <input type="text" placeholder='Username'  />
                    </div>
                <div className="login-formGroup">
                    <label>Пароль</label>
                    <input type="password" placeholder='Password'  />
                </div>
            
                <div className="login-button">
                    <button className='login-writeButton' type='submit'>Войти</button>
                </div>
                </form>
            </div>
      </div>
    );
};

export default Login;