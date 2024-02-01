import React from 'react';
import './register.css'

const Register = (props) => {

    let onSubmit = (formData) => {
        props.onTryRegister(formData);
    }

    return (
        <div className='register section__padding'>
            <div className="register-container">
                <h1>Регистрация</h1>
            </div>
        </div>
    );
};

const RegisterForm = (props) => {
    return (
        <form className="register-writeForm" onSubmit={props.handleSubmit} >
            <div className="register-formGroup">
                <label>Имя в игре</label>
            </div>
            <div className="register-formGroup">
                <label>Email</label>
            </div>
            <div className="register-formGroup">
                <label>Пароль</label>
            </div>
            <div className="register-button">
                <button className="register-writeButton">
                    <span>Регистрация</span>
                </button>
            </div>
        </form>
    );
};

export default Register;