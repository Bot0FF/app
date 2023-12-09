import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StateUser from './common/StateUser'
import { mailStore } from './common/MailStore';

const stateUser = new StateUser();

export const Context = createContext({
    stateUser
});

//обновляет состояние user
export const updateUser = (user, bool) => {
    stateUser.setUser(user, bool);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (mailStore) => {
    root.render(
        <Context.Provider value={{ stateUser }}>
            <BrowserRouter>
                <App mailStore={mailStore}/>
            </BrowserRouter>
        </Context.Provider>
    );
};

rerenderTree(mailStore);
mailStore.subscribe(() => {
    rerenderTree(mailStore);
})
