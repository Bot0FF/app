import React, { useState, useEffect } from 'react';
import Modal from "../../common/util/modal/Modal";
import "./fight.css";
import AbilityButton from './../../common/util/Button/AbilityButton';

const Fight = (props) => {

    const [modalActive, setModalActive] = useState(false);
    const [unit, setUnit] = useState({});

    const setModal = (isActive, unit) => {
        setModalActive(isActive);
        setUnit(unit);
    }

    const setCurrentHit = (isActive, abilityId, targetId) => {
        setModalActive(isActive);
        props.setHit(abilityId, targetId);
    }

    const isMyTeam = () => {
        return props.player.teamNumber == unit.teamNumber ? true : false;
    }

    const getResultRound = () => {
        return props.resultRound.split("][").map(item => item.replace("[", "").replace("]", ""));
    }

    return (
        <div className="header-fight">
            <div className="header-fight--info">
                <span>{props.info}</span>
                {getResultRound().map(item => <span key={item}>{item}</span>)}
                <span className="border-fight--info" />
                <span>Раунд:{props.countRound} </span>
                <Timer endRoundTimer={props.endRoundTimer} loadRound={props.loadRound} setCurrentHit={props.setCurrentHit} />
            </div>
            <div className="parent-fight--content">
                <div className="unit__list">
                    <Team
                        player={props.player}
                        teamList={props.teamOne}
                        setModal={setModal}
                    />
                </div>
                <div className="unit__list">
                    <Team
                        player={props.player}
                        teamList={props.teamTwo}
                        setModal={setModal}
                    />
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <span style={{ padding: 10 }}>
                    <u>Выбран: {unit.name} </u>
                    <br />
                    <span>Здоровье: {unit.hp} / Мана: {unit.mana}</span>
                </span>
                <u style={{ marginBottom: 5 }}>Доступные умения:</u>
                {props.ability.map(a => {
                    if (isMyTeam() && ["RECOVERY", "BOOST"].includes(a.hitType)) {
                        return (
                            <AbilityButton
                                key={a.id}
                                ability={a}
                                enemy={unit}
                                setCurrentHit={setCurrentHit}
                            />);
                    }
                    else if (!isMyTeam() && ["DAMAGE", "LOWER"].includes(a.hitType)) {
                        return (
                            <AbilityButton
                                key={a.id}
                                ability={a}
                                enemy={unit}
                                setCurrentHit={setCurrentHit}
                            />);
                    }
                }
                )}
            </Modal>
        </div>
    );
};

const Team = (props) => {
    return (
        props.teamList.map(unit =>
            <div
                className={props.player.id == unit.id ? "unit-item player" : "unit-item"}
                key={unit.id}
                onClick={() => props.setModal(true, unit)}
            >
                <span>
                    <u>{unit.name} </u>
                    <br />
                    <span>Здоровье: {unit.hp} / Мана: {unit.mana}</span>
                </span>
            </div>
        )
    )
}

const Timer = ({ endRoundTimer, loadRound }) => {
    const [counter, setCounter] = useState(60);
    let timeToEndRound = ((Math.round(endRoundTimer / 1000 - Date.now() / 1000)));

    useEffect(() => {
        if (counter >= 0) {
            setTimeout(() => setCounter(timeToEndRound - 1), 1000);
        }
        else {
            loadRound();
            setCounter(60);
        }
    }, [counter]);
    return (
        <span>До конца раунда {counter} сек</span>
    )
}




export default Fight;