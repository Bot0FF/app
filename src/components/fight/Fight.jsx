import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from "../../common/util/modal/Modal";
import "./fight.css";

const Battle = ({ player, fight, teamOne, teamTwo, refreshFight, setHit, info }) => {
    const [counter, setCounter] = useState(60);
    const [modalActive, setModalActive] = useState(false);
    const [enemy, setEnemy] = useState({});

    const setModal = (isActive, enemy) => {
        setModalActive(isActive);
        setEnemy(enemy);
    }

    const setCurrentHit = (isActive, targetId, enemyId) => {
        setModalActive(isActive);
        setHit(targetId, enemyId);
    }

    useEffect(() => {
        let timeToEndRound = ((Math.round(fight.endRoundTimer/1000 - Date.now()/1000)) + 1);
        if(counter >= 0) {
        setTimeout(() => setCounter(timeToEndRound - 1), 1000);
        }
        if (counter <= 0) {
            refreshFight();
            setCounter(timeToEndRound);
        }
    }, [counter]);

    return (
        <div className="header">
            <div className="header__info">
                <span>{info}</span>
                <span>{fight.resultRound}</span>
                <span>Раунд:{fight.countRound} </span>
                <span>До конца раунда {counter} сек</span>
            </div>
            <div className="parent__content">
                <ul className="unit__list">
                    {teamOne.map(unit =>
                        <div className="unit__item" key={unit.id}>
                            <span>{unit.name} здоровье: {unit.hp} мана: {unit.mana}</span>
                        </div>
                    )}
                </ul>
                <br />
                <ul className="unit__list">
                    {teamTwo.map(unit =>
                        <div
                            className="unit__item"
                            key={unit.id}
                            onClick={() => setModal(true, unit)}>
                            <span>{unit.name} здоровье: {unit.hp} мана: {unit.mana}</span>
                        </div>
                    )}
                </ul>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <span style={{ padding: 10 }}>
                    Выбран: {enemy.name} / Здоровье: {enemy.hp}
                </span>
                <Button
                    variant="outlined"
                    style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
                    onClick={() => setCurrentHit(false, 0, enemy.id)}
                >
                    Атака ({Math.floor(player.damage * 0.7)} - {Math.floor(player.damage * 1.3)})
                </Button>
                <span style={{ padding: 10 }}>Доступные умения:</span>
            </Modal>
        </div>
    );
};

export default Battle;