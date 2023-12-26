import React from "react";
import "./login.css";
import { Field } from "redux-form";

const Login = (props) => {
    return (
        <div className="login section__padding">
            <div className="login-container">
                <h1>Вход</h1>
                <form className="login-writeForm" onSubmit={props.handleSubmit}>
                    <div className="login-formGroup">
                        <label>Логин</label>
                        <Field
                            name={"username"}
                            component={"input"}
                            placeholder={"Логин"}
                        />
                    </div>
                    <div className="login-formGroup">
                        <label>Пароль</label>
                        <Field
                            name={"password"}
                            component={"input"}
                            placeholder={"Пароль"}
                        />
                    </div>
                    <div className="login-button">
                        <button
                            className="login-writeButton"
                            >
                            <span>Войти</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;