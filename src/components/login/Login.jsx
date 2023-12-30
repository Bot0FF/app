import React from "react";
import "./login.css";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.handleSubmit(formData);
    };

    return (
        <div className="login section__padding">
            <div className="login-container">
                <h1>Вход</h1>
                <LoginFormRedux onSubmit={onSubmit} />
            </div>
        </div>
    );
};

const LoginForm = (props) => {
    return (
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
                <button className="login-writeButton">
                    <span>Войти</span>
                </button>
            </div>
        </form>
    );
};

const LoginFormRedux = reduxForm({ form: "login" })(LoginForm);

export default Login;