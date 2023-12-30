import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './register.css'

const Register = (props) => {

    let onSubmit = (formData) => {
        props.onTryRegister(formData);
    }

    return (
        <div className='register section__padding'>
            <div className="register-container">
                <h1>Регистрация</h1>
                <RegisterFormRedux onSubmit={onSubmit} />
            </div>
        </div>
    );
};

const RegisterForm = (props) => {
    return (
        <form className="register-writeForm" onSubmit={props.handleSubmit} >
            <div className="register-formGroup">
                <label>Имя в игре</label>
                <Field
                    name={"username"}
                    component={"input"}
                    placeholder={"Имя пользователя"}
                />
            </div>
            <div className="register-formGroup">
                <label>Email</label>
                <Field
                    name={"email"}
                    component={"input"}
                    placeholder={"Почта"}
                />
            </div>
            <div className="register-formGroup">
                <label>Пароль</label>
                <Field
                    name={"password"}
                    component={"input"}
                    placeholder={"Пароль"}
                />
            </div>
            <div className="register-button">
                <button className="register-writeButton">
                    <span>Регистрация</span>
                </button>
            </div>
        </form>
    );
};

const RegisterFormRedux = reduxForm({ form: "register" })(RegisterForm);

export default Register;