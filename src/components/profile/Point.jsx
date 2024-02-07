import React from 'react';

const Point = (props) => {
    return (<>
        <u>Очки умений</u>
        <li>Сила: {props.player.power}</li>
        <li>Ловкость: {props.player.agility}</li>
        <li>Выносливость: {props.player.endurance}</li>
        <li>Магия: {props.player.magic}</li>
    </>
    );
};

export default Point;