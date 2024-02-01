import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import bridge from '@vkontakte/vk-bridge';
import { store } from './common/redux-store';
import { Provider } from 'react-redux';
import './index.css';

bridge.send("VKWebAppInit");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
