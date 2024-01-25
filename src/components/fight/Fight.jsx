import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from "../../common/util/modal/Modal";
import "./fight.css";

const Fight = ({ player, fight, teamOne, teamTwo, refreshFight, setHit, resultRound, info }) => {
    const [counter, setCounter] = useState(60);
    const [modalActive, setModalActive] = useState(false);
    const [enemy, setEnemy] = useState({});

    const setModal = (isActive, enemy) => {
        setModalActive(isActive);
        setEnemy(enemy);
        // getAbility();
    }

    const setCurrentHit = (isActive, abilityId, targetId) => {
        setModalActive(isActive);
        setHit(abilityId, targetId);
    }

    useEffect(() => {
        let timeToEndRound = ((Math.round(fight.endRoundTimer / 1000 - Date.now() / 1000)));
        if (counter >= 0) {
            setTimeout(() => setCounter(timeToEndRound - 1), 1000);
        }
        else {
            refreshFight();
            setCounter(60);
        }
    }, [counter]);

    return (
        <div className="header">
            <div className="header__info">
                <span>{info}</span>
                <span>{resultRound}</span>
                <span>Раунд:{fight.countRound} </span>
                <span>До конца раунда {counter} сек</span>
            </div>
            <div className="parent__content">
                <div className="unit__list">
                    {teamOne.map(unit =>
                        <div
                            className="unit__item"
                            key={unit.id}>
                            <span>{unit.name} здоровье: {unit.hp} мана: {unit.mana}</span>
                        </div>
                    )}
                    <br />
                    {teamTwo.map(unit =>
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
                <Button
                    variant="outlined"
                    style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
                    size="small"
                    onClick={() => setCurrentHit(false, 0, enemy.id)}
                >
                    <span style={{fontWeight: 'bold'}}>Атака ({Math.floor(player.damage * 0.7)}-{Math.floor(player.damage * 1.3)})</span>
                </Button>
                <span style={{ padding: 10 }}>Доступные умения:</span>
                {/* {ability.map(a =>
                    <Button
                        key={a.id}
                        variant="outlined"
                        size="small"
                        style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
                        onClick={() => setCurrentHit(false, 0, enemy.id)}>
                        <Ability ability={a} />
                    </Button>
                )} */}
            </Modal>
        </div>
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
            return <span style={{fontWeight: 'bold'}}>Урон: ({getMinDamage()}-{getMaxDamage()})</span>
        }
        else if(ability.hp != 0) {
            return <span style={{fontWeight: 'bold'}}>Восстановление здоровья: {ability.hp}</span>
        }
    }

    return (
        <div>
            <span style={{fontWeight: 'bold'}}>{ability.name}</span>
            <br/>
            {getDescription()}
        </div>
    );
};

export default Fight;