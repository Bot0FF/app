import React from 'react';
import './register.css'

const Register = () => {
    return (
        <div className='register section__padding'>
            <div className="register-container">
                <h1>Регистрация</h1>
                <form className='register-writeForm' autoComplete='off' >
                    <div className="register-formGroup">
                        <label>Имя в игре</label>
                        <input type="text" placeholder='Username'  />
                    </div>
                    <div className="register-formGroup">
                        <label>Email</label>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="register-formGroup">
                        <label>Пароль</label>
                        <input type="text" placeholder='Password'   />
                    </div>
                    <div className="register-button">
                        <button className='register-writeButton'>Регистрация</button>
                    </div>
                </form>
            </div> 
        </div>
    );
};

export default Register;