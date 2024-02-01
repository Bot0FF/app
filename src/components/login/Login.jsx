import React from "react";
import "./login.css";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.handleSubmit(formData);
    };

    return (
        <div className="login section__padding">
            <div className="login-container">
                <h1>Вход</h1>
            </div>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <form className="login-writeForm" onSubmit={props.handleSubmit}>
            <div className="login-formGroup">
                <label>Логин</label>
            </div>
            <div className="login-formGroup">
                <label>Пароль</label>
            </div>
            <div className="login-button">
                <button className="login-writeButton">
                    <span>Войти</span>
                </button>
            </div>
        </form>
    );
};

export default Login;