import React from 'react';

const Skill = (props) => {
    return (<>
        <u>Навыки:</u>
        <li>Одноручное оружие: {props.unitSkill.oneHand}</li>
        <li>Двуручное оружие: {props.unitSkill.twoHand}</li>
        <li>Луки: {props.unitSkill.bow}</li>
        <li>Магия огня: {props.unitSkill.fire}</li>
        <li>Магия воды: {props.unitSkill.water}</li>
        <li>Магия земли: {props.unitSkill.land}</li>
        <li>Магия воздуха: {props.unitSkill.air}</li>
        <li>Живучесть: {props.unitSkill.vitality}</li>
        <li>Духовность: {props.unitSkill.spirituality}</li>
        <li>Регенерация: {props.unitSkill.regeneration}</li>
        <li>Мадитация: {props.unitSkill.meditation}</li>
        <li>Блокирование: {props.unitSkill.block}</li>
        <li>Уклонение: {props.unitSkill.evade}</li>
    </>
    );
};

export default Skill;