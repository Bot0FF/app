import React from 'react';
import './profile.css';

const Player = (props) => {
    return (<>
        <u>Имя: {props.player.name}</u>
        <li>Здоровье: {props.player.hp} (Максимум: {props.player.fullHp})</li>
        <li>Мана:  {props.player.mana} (Максимум: {props.player.fullMana})</li>
        <li>Базовый урон: {props.player.fullDamage}</li>
        <li>Защита: {props.player.fullDefense}</li>
    </>
    );
};

export default Player;