import React from 'react';
import './profile.css';

const Player = (props) => {
    return (
        <div>
            <li>Имя: {props.player.name}</li>
            <li>Здоровье: {props.player.hp} (Максимум: {props.player.maxHp})</li>
            <li>Мана:  {props.player.mana} (Максимум: {props.player.maxMana})</li>
            <li>Базовый урон: {props.player.damage}</li>
            <li>Защита: {props.player.defense}</li>
        </div>
    );
};

export default Player;