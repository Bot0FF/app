import React, { useState } from 'react';

const Special = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addThingToInventory(inputValue);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="content-inventory--special">
            <u>{props.info}</u>
            <br />
            <span>Сгенерировать предмет по id</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='id предмета' value={inputValue} onChange={handleChange} />
                <button type="submit">Сгенерировать</button>
            </form>
        </div>
    );
}

export default Special;