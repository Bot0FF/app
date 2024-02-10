import React, { useState, useEffect } from 'react';
import Modal from '../../common/util/modal/Modal';
import FightButton from '../../common/util/button/FightButton';
import './fight.css';
import { Tooltip } from '@mui/material';

const Fight = (props) => {
    console.log(props)
    const [modalActive, setModalActive] = useState(false);
    const [unit, setUnit] = useState({});

    const setModal = (isActive, unit) => {
        setModalActive(isActive);
        setUnit(unit);
    }

    const setHitWeapon = (isActive, targetId) => {
        setModalActive(isActive);
        props.setHitWeapon(targetId);
    }

    const setHitAbility = (isActive, abilityId, targetId) => {
        setModalActive(isActive);
        props.setHitAbility(abilityId, targetId);
    }

    const isMyTeam = () => {
        return props.player.teamNumber === unit.teamNumber ? true : false;
    }

    const getResultRound = () => {
        return props.resultRound.split("][").map(item => item.replace("[", "").replace("]", ""));
    }

    return (
        <div className="header-fight">
            <div className="fight-info">
                {modalActive
                    ?
                    <span className="border-action--info"></span>
                    :
                    <span className="border-action--info">{props.info}</span>
                }
                {Array.from(getResultRound()).map(item =>
                    <span className="border-history--info" key={item}>{item}</span>
                )}
                <span>Раунд:{props.countRound} </span>
                <Timer endRoundTimer={props.endRoundTimer} loadRound={props.loadRound} setCurrentHit={props.setCurrentHit} />
            </div>
            <div className="fight-units">
                <div className="unit-list">
                    <Team
                        player={props.player}
                        teamList={props.teamOne}
                        setModal={setModal}
                    />
                </div>
                <div className="unit-list">
                    <Team
                        player={props.player}
                        teamList={props.teamTwo}
                        setModal={setModal}
                    />
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="modal-fight--info">
                    <u>{props.info} </u>
                    <br />
                    <span>{unit.name}</span>
                    <br />
                    <span>Здоровье: {unit.hp} / Мана: {unit.mana}</span>
                </div>
                {isMyTeam()
                    ?
                    <></>
                    :
                    <>
                        <div className="modal-fight--filed">
                            <PositionUnits
                                player={props.player}
                                unit={unit}
                            />
                        </div>
                        <div className="fight-move--button">
                            <FightButton
                                name="Шаг влево"
                                onClick={() => { props.setMove("left") }}
                            />
                            <FightButton
                                name="Шаг вправо"
                                onClick={() => props.setMove("right")}
                            />
                        </div>
                        <FightButton
                            name={"Атака"}
                            onClick={() => setHitWeapon(false, unit.id)}
                        />
                    </>
                }
                <u>Доступные умения:</u>
                {Array.from(props.ability).map(a => {
                    if (isMyTeam() && ["RECOVERY", "BOOST"].includes(a.hitType)) {
                        return (
                            <FightButton
                                description={a.description}
                                name={a.name}
                                onClick={() => setHitAbility(false, a.id, unit.id)}
                            />);
                    }
                    else if (!isMyTeam() && ["DAMAGE", "LOWER"].includes(a.hitType)) {
                        return (
                            <FightButton
                                description={a.description}
                                name={a.name}
                                onClick={() => setHitAbility(false, a.id, unit.id)}
                            />);
                    }
                }
                )}
            </Modal>
        </div>
    );
};

//массив div с позицией units
const PositionUnits = (props) => {
    let filed = [];
    for (let i = 1; i < 9; i++) {
        if (props.player.fightPosition === i && props.unit.fightPosition === i) {
            filed.push(
                <Tooltip
                    key={i}
                    title={`${props.player.name}, ${props.unit.name}`}
                    placement="top"
                    disableInteractive
                    arrow
                >
                    <div
                        key={i}
                        className="modal-fight--element  color--join"
                    >
                    </div>
                </Tooltip>
            )
        }
        else if (props.player.fightPosition === i) {
            filed.push(
                <Tooltip
                    key={i}
                    title={props.player.name}
                    placement="top"
                    disableInteractive
                    arrow
                >
                    <div
                        key={i}
                        style={{ background: "#464c80" }}
                        className="modal-fight--element"
                    >
                        ОД:{props.player.pointAction}/{props.player.maxPointAction}
                    </div>
                </Tooltip>
            )
        }
        else if (props.unit.fightPosition === i) {
            filed.push(
                <Tooltip
                    key={i}
                    title={props.unit.name}
                    placement="top"
                    disableInteractive
                    arrow
                >
                    <div
                        key={i}
                        style={{ background: "#744444" }}
                        className="modal-fight--element"
                    >
                        ОД:{props.unit.pointAction}/{props.unit.maxPointAction}
                    </div>
                </Tooltip>
            )
        }
        else {
            filed.push(<div
                key={i}
                className="modal-fight--element"
            />)
        }
    }
    return (<>
        {filed}
    </>
    );
}

const Team = (props) => {
    return (
        Array.from(props.teamList).map(unit =>
            <div
                className={props.player.id == unit.id ? "unit-item player" : "unit-item"}
                key={unit.id}
                onClick={() => props.setModal(true, unit)}
            >
                <span>
                    <u>{unit.name} </u>
                    <br />
                    {props.player.id == unit.id
                        ?
                        <span style={{ fontSize: 13 }}>Здоровье: {unit.hp} ({unit.maxHp}) / Мана: {unit.mana}  ({unit.maxMana})</span>
                        :
                        <span style={{ fontSize: 13 }}>Здоровье: {unit.hp} / Мана: {unit.mana}</span>
                    }
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