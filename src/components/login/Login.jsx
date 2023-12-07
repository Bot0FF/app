import React, { useState } from "react";
import "./login.css";
import {observer} from "mobx-react-lite";
import {login} from "../../services/AuthService";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let tryLogin = (e) => {
        e.preventDefault();
        login(username, password);
    }

    return (
        <div className="login section__padding">
            <div className="login-container">
                <h1>Вход</h1>
                <form className="login-writeForm" autoComplete='off'>
                    <div className="login-formGroup">
                        <label>Логин</label>
                        <input 
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                            type="text" 
                            placeholder="Логин" 
                        />
                    </div>
                    <div className="login-formGroup">
                        <label>Пароль</label>
                        <input 
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="text" 
                            placeholder="Пароль" 
                        />
                    </div>
                    <div className="login-button">
                        <button
                            className="login-writeButton"
                            onClick={tryLogin}> 
                            <span>Войти</span>
                        </button>
                    </div>
                </form>
            </div>
      </div>
    );
};

export default observer(Login);