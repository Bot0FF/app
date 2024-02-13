import React from 'react';

const Player = (props) => {
    return (<>
        <u>Имя: {props.player.name}</u>
        <li>Здоровье: {props.player.hp} (Максимум: {props.player.fullHp})</li>
        <li>Мана: {props.player.mana} (Максимум: {props.player.fullMana})</li>
        <li>Физический урон: {props.player.physDamage}</li>
        <li>Модификатор магического урона: {props.player.magModifier} %</li>
        <li>Физическиая защита: {props.player.physDefense}</li>
        <li>Магическая защита: {props.player.magDefense}</li>
        <li>Инициатива: {props.player.initiative}</li>
        <li>Очки движения: {props.player.pointAction} (Максимум: {props.player.maxPointAction})</li>
        <li>Восстановление здоровья в сек: {props.player.regeneration}</li>
        <li>Восстановление маны в сек: {props.player.meditation}</li>
        <li>Шанс блокирования физического удара: {props.player.chanceBlock}%</li>
        <li>Шанс уклонения от атаки: {props.player.chanceEvade}%</li>
    </>
    );
};

export default Player;