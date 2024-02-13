import React, { useState, useEffect } from 'react';
import Modal from '../../common/util/modal/Modal';
import FightButton from '../../common/util/button/FightButton';
import { Tooltip } from '@mui/material';
import './fight.css';


const Fight = (props) => {
    const [modalActive, setModalActive] = useState(false);
    const [unit, setUnit] = useState({});

    //обновляет unit, когда приходят данные
    useEffect(() => {
        let inTeamOne = Array.from(props.teamOne).find(u => u.id === unit.id);
        let inTeamTwo = Array.from(props.teamTwo).find(u => u.id === unit.id);
        if (inTeamOne != undefined) {
            setUnit(inTeamOne);
        }
        else if (inTeamTwo != undefined) {
            setUnit(inTeamTwo);
        }
    }, [props.teamOne, props.teamTwo])

    //открытие модального окна
    const setModal = (isActive, unit) => {
        setModalActive(isActive);
        setUnit(unit);
    }

    //завершение хода, закрытие модального окна
    const setActionEnd = (isActive) => {
        setModalActive(isActive);
        props.setActionEnd();
    }

    //перемещение unit
    const setMove = (direction) => {
        if (props.player.pointAction > 0) {
            props.setMove(direction);
        }
    }

    //проверка является ли выбранный unit союзником
    const isMyTeam = () => {
        return props.player.teamNumber === unit.teamNumber ? true : false;
    }

    //формирование истории раунда из ответа сервера, в массив
    const getResultRound = () => {
        return props.resultRound.split("][").map(item => item.replace("[", "").replace("]", ""));
    }

    return (
        <div className="header-fight">
            <div className="fight-info">
                {props.info
                    ?
                    <span className="border-action--info">{props.info}</span>
                    :
                    <></>
                }
                {Array.from(getResultRound()).map(item =>
                    <span className="border-history--info" key={item}>{item}</span>
                )}
                <span>Раунд:{props.countRound} </span>
                <Timer endRoundTimer={props.endRoundTimer} getFightState={props.getFightState} setCurrentHit={props.setCurrentHit} />
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
                    <FightButton
                        name={"Завершить ход"}
                        onClick={() => setActionEnd(false)}
                    />
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
                                onClick={() => setMove("left")}
                            />
                            <FightButton
                                name="Шаг вправо"
                                onClick={() => setMove("right")}
                            />
                        </div>
                        <FightButton
                            name={"Атака"}
                            onClick={() => props.setHitWeapon(unit.id)}
                        />
                        <FightButton
                            name={"Завершить ход"}
                            onClick={() => setActionEnd(false)}
                        />
                    </>
                }
                <u>Доступные умения:</u>
                {Array.from(props.ability).map(a => {
                    if (isMyTeam() && ["RECOVERY", "BOOST"].includes(a.applyType)) {
                        return (
                            <FightButton
                                description={a.description}
                                name={a.name}
                                onClick={() => props.setHitAbility(a.id, unit.id)}
                            />);
                    }
                    else if (!isMyTeam() && ["DAMAGE", "LOWER"].includes(a.applyType)) {
                        return (
                            <FightButton
                                description={a.description}
                                name={a.name}
                                onClick={() => props.setHitAbility(a.id, unit.id)}
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
        if (props.player.linePosition === i && props.unit.linePosition === i) {
            filed.push(
                <Tooltip
                    key={i}
                    title={`${props.player.name}(ОД${props.player.pointAction}/${props.player.maxPointAction}), 
                            ${props.unit.name}(ОД${props.unit.pointAction}/${props.unit.maxPointAction})`}
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
        else if (props.player.linePosition === i) {
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
        else if (props.unit.linePosition === i) {
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

//список состава команд в сражении
const Team = (props) => {
    return (
        Array.from(props.teamList).map(unit =>
            <div
                className={props.player.id === unit.id ? "unit-item player" : "unit-item"}
                key={unit.id}
                onClick={() => props.setModal(true, unit)}
            >
                <span>
                    <u>{unit.name} </u>
                    <br />
                    {props.player.id === unit.id
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

//таймер раунда
const Timer = ({ endRoundTimer, getFightState }) => {
    const [counter, setCounter] = useState(60);
    let timeToEndRound = ((Math.round(endRoundTimer / 1000 - Date.now() / 1000)));

    useEffect(() => {
        if (counter >= 0) {
            setTimeout(() => setCounter(timeToEndRound - 1), 1000);
        }
        else {
            getFightState();
            setCounter(60);
        }
    }, [counter]);
    return (
        <span>До конца раунда {counter} сек</span>
    )
}




export default Fight;