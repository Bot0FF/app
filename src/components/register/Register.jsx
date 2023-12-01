import React, { useContext, useState } from 'react';
import './register.css'
import { Context } from "../../index";
import {observer} from "mobx-react-lite";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {store} = useContext(Context);

    return (
        <div className='register section__padding'>
            <div className="register-container">
                <h1>Регистрация</h1>
                <form className='register-writeForm' autoComplete='off' >
                    <div className="register-formGroup">
                        <label>Имя в игре</label>
                        <input 
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                            type="text" 
                            placeholder="Имя пользователя"/>
                    </div>
                    <div className="register-formGroup">
                        <label>Email</label>
                        <input 
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="email" 
                            placeholder="Почта"/>
                    </div>
                    <div className="register-formGroup">
                        <label>Пароль</label>
                        <input 
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="text" 
                            placeholder='Пароль'/>
                    </div>
                    <div className="register-button">
                        <button 
                            className='register-writeButton'
                            onClick={(e) => {
                                e.preventDefault();
                                store.register(username, email, password)
                                }}
                            >Регистрация
                        </button>
                    </div>
                </form>
            </div> 
        </div>
    );
};

export default observer(Register);