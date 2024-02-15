import React from 'react';

const Characteristic = (props) => {
    return (<>
        <u>Характеристики:</u>
        <li>Сила: {props.player.strength}</li>
        <li>Интеллект: {props.player.intelligence}</li>
        <li>Ловкость: {props.player.dexterity}</li>
        <li>Выносливость: {props.player.endurance}</li>
        <li>Удача: {props.player.luck}</li>
    </>
    );
};

export default Characteristic;