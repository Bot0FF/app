import React from "react";
import "./login.css";

const Login = (props) => {

    let onTryLogin = (e) => {
        e.preventDefault();
        props.onTryLogin(props.username, props.password);
    }

    return (
        <div className="login section__padding">
            <div className="login-container">
                <h1>Вход</h1>
                <form className="login-writeForm" autoComplete='off'>
                    <div className="login-formGroup">
                        <label>Логин</label>
                        <input 
                            onChange={e => props.setUsername(e.target.value)}
                            value={props.username}
                            type="text" 
                            placeholder="Логин" 
                        />
                    </div>
                    <div className="login-formGroup">
                        <label>Пароль</label>
                        <input 
                            onChange={e => props.setPassword(e.target.value)}
                            value={props.password}
                            type="text" 
                            placeholder="Пароль" 
                        />
                    </div>
                    <div className="login-button">
                        <button
                            className="login-writeButton"
                            onClick={(e) => onTryLogin(e)}> 
                            <span>Войти</span>
                        </button>
                    </div>
                </form>
            </div>
      </div>
    );
};

export default Login;