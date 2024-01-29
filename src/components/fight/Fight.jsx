import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from "../../common/util/modal/Modal";
import "./fight.css";

const Fight = (props) => {
    const [modalActive, setModalActive] = useState(false);
    const [enemy, setEnemy] = useState({});

    const setModal = (isActive, enemy) => {
        setModalActive(isActive);
        setEnemy(enemy);
    }

    const setCurrentHit = (isActive, abilityId, targetId) => {
        setModalActive(isActive);
        props.setHit(abilityId, targetId);
    }

    const getResultRound = () => {
        return props.resultRound.split("][").map(item => item.replace("[", "").replace("]", ""));
    }

    return (
        <div className="header">
            <div className="header__info">
                <span>{props.info}</span>
                {getResultRound().map(item => <span key={item}>{item}</span>)}
                 <span>Раунд:{props.countRound} </span>
                <Timer endRoundTimer={props.endRoundTimer} loadRound={props.loadRound} setCurrentHit={props.setCurrentHit} />
            </div>
            <div className="parent__content">
                <div className="unit__list">
                    {props.teamOne.map(unit =>
                        <div
                            className="unit__item"
                            key={unit.id}
                            onClick={() => setModal(true, unit)}>   
                            <span>{unit.name} здоровье: {unit.hp} мана: {unit.mana}</span>
                        </div>
                    )}
                    <br />
                    {props.teamTwo.map(unit =>
                        <div
                            className="unit__item"
                            key={unit.id}
                            onClick={() => setModal(true, unit)}>
                            <span>{unit.name} здоровье: {unit.hp} мана: {unit.mana}</span>
                        </div>
                    )}
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <span style={{ padding: 10 }}>
                    Выбран: {enemy.name} / Здоровье: {enemy.hp}
                </span>
                <span style={{ padding: 10 }}>Доступные умения:</span>
                {props.ability.map(a =>
                    <Button
                        key={a.id}
                        variant="outlined"
                        size="small"
                        style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
                        onClick={() => setCurrentHit(false, a.id, enemy.id)}>
                        <Ability ability={a} />
                    </Button>
                )}
            </Modal>
        </div>
    );
};

const Timer = ({ endRoundTimer, loadRound }) => {
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        if (counter >= 0) {
            let timeToEndRound = ((Math.round(endRoundTimer / 1000 - Date.now() / 1000)));
            setTimeout(() => setCounter(timeToEndRound - 1), 1000);
        }
        else {
            loadRound();
            setCounter(60);
        }
    }, [counter]);
    return (
        <span>До конца раунда {counter} сек</span>
    );
};


const Ability = ({ ability }) => {

    const getMinDamage = () => {
        return Math.floor(ability.damage * 0.7);
    }

    const getMaxDamage = () => {
        return Math.floor(ability.damage * 1.3);
    }

    const getDescription = () => {
        if (ability.damage != 0) {
            return <span style={{ fontWeight: 'bold' }}>Урон: ({getMinDamage()}-{getMaxDamage()})</span>
        }
        else if (ability.hp != 0) {
            return <span style={{ fontWeight: 'bold' }}>Восстановление здоровья: {ability.hp}</span>
        }
    }

    return (
        <div>
            <span style={{ fontWeight: 'bold' }}>{ability.name}</span>
            <br />
            {getDescription()}
        </div>
    );
};

export default Fight;