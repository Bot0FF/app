import React from 'react';
import "./greeting.css";

const Greeting = (props) => {
    return (
        <div className="news-item">
            <h2>Изображение: {props.imgLink}</h2>
            <h2>Новость: {props.description}</h2>
        </div>
    );
};

export default Greeting;