import React from 'react';
import './register.css'

const Register = (props) => {

    let onTryRegister = (e) => {
        e.preventDefault();
        props.onTryRegister(props.username, props.email, props.password);
    }

    return (
        <div className='register section__padding'>
            <div className="register-container">
                <h1>Регистрация</h1>
                <form className='register-writeForm' autoComplete='off' >
                    <div className="register-formGroup">
                        <label>Имя в игре</label>
                        <input 
                            onChange={e => props.setUsername(e.target.value)}
                            value={props.username}
                            type="text" 
                            placeholder="Имя пользователя"/>
                    </div>
                    <div className="register-formGroup">
                        <label>Email</label>
                        <input 
                            onChange={e => props.setEmail(e.target.value)}
                            value={props.email}
                            type="email" 
                            placeholder="Почта"/>
                    </div>
                    <div className="register-formGroup">
                        <label>Пароль</label>
                        <input 
                            onChange={e => props.setPassword(e.target.value)}
                            value={props.password}
                            type="text" 
                            placeholder='Пароль'/>
                    </div>
                    <div className="register-button">
                        <button 
                            className='register-writeButton'
                            onClick={(e) => onTryRegister(e)}
                            >Регистрация
                        </button>
                    </div>
                </form>
            </div> 
        </div>
    );
};

export default Register;