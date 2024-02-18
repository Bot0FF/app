import React, { useState, useEffect } from 'react';
import Modal from '../../common/util/modal/Modal';
import { ActionButton } from '../../common/util/button/FightButton';
import { UserInfoTooltip, FightLineTooltip } from '../../common/util/tooltip/FightTooltip';
import './fight.css';

const Fight = (props) => {
    const [modalActive, setModalActive] = useState(false);
    const [isLineInfoActive, setLineInfoActive] = useState(false);
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

    //нанесение удара
    const setHitWeapon = (unitId) => {
        props.setHitWeapon(unitId);
        setLineInfoActive(true);
    }

    //применение умения
    const setHitAbility = (abilityId, unitId) => {
        props.setHitAbility(abilityId, unitId);
        setLineInfoActive(true);
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

    return (
        <div className="header-fight">
            <div className="fight-info">
                <ResultRoundHistory resultRound={props.resultRound} />
                <span>Раунд:{props.countRound} </span>
                <Timer
                    endRoundTimer={props.endRoundTimer}
                    getFightState={props.getFightState}
                    setModalActive={setModalActive}
                />
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
                <div className="modal-fight--filed">
                    {isLineInfoActive === true
                        ?
                        <FightLineInfo
                            info={props.info}
                            isLineInfoActive={isLineInfoActive}
                            setLineInfoActive={setLineInfoActive}
                        />
                        :
                        <PositionUnits
                            player={props.player}
                            unit={unit}
                        />
                    }
                </div>
                <div className="fight-move--button">
                    <ActionButton
                        name="Шаг влево"
                        onClick={() => setMove("left")}
                    />
                    <ActionButton
                        name="Шаг вправо"
                        onClick={() => setMove("right")}
                    />
                </div>
                <div className="fight-action--button">
                    {isMyTeam()
                        ?
                        <></>
                        :
                        <ActionButton
                            name={"Атака"}
                            onClick={() => setHitWeapon(unit.id)}
                        />
                    }
                    <ActionButton
                        name={"Завершить ход"}
                        onClick={() => setActionEnd(false)}
                    />
                </div>
                <u>Доступные умения:</u>
                <div className="fight-ability--current">
                    <UnitAbility
                        isMyTeam={isMyTeam}
                        ability={props.ability}
                        setHitAbility={setHitAbility}
                        unit={unit}
                    />
                </div>
            </Modal>
        </div>
    );
};

//результат предыдущего раунда
const ResultRoundHistory = ({ resultRound }) => {
    //формирование истории раунда из ответа сервера, в массив
    const getResultRound = () => {
        return resultRound.split("][").map(item => item.replace("[", "").replace("]", ""));
    }

    return <>
        {Array.from(getResultRound()).map(item =>
            <i className="border-history--info" key={item}>{item}</i>
        )}
    </>
}

//массив div с позицией units
const PositionUnits = (props) => {
    return [...Array(6).keys()].map((key) => {
        if (key === props.player.linePosition && key === props.unit.linePosition) {
            return <React.Fragment key={key}>
                <FightLineTooltip
                    k={key}
                    title={`${props.player.name}(ОД ${props.player.pointAction}/${props.player.maxPointAction}), 
                    ${props.unit.name}(ОД ${props.unit.pointAction}/${props.unit.maxPointAction})`}
                />
                <div
                    className="modal-fight--element"
                    style={{ background: "linear-gradient(to right, #464c80 50%, #744444 0%)" }}
                >
                    <span className={`unit-${key}`}>*****</span>
                </div>
            </React.Fragment>
        }
        else if (key === props.player.linePosition) {
            return <React.Fragment key={key}>
                <FightLineTooltip
                    k={key}
                    title={props.player.name}
                />
                <div
                    className="modal-fight--element"
                    style={{ background: "#464c80" }}
                >
                    <span className={`unit-${key}`}>ОД:{props.player.pointAction}/{props.player.maxPointAction}</span>
                </div>
            </React.Fragment>
        }
        else if (key === props.unit.linePosition) {
            return <React.Fragment key={key}>
                <FightLineTooltip
                    k={key}
                    title={props.unit.name}
                />
                <div
                    className="modal-fight--element"
                    style={{ background: "#744444" }}
                >
                    <span className={`unit-${key}`}>ОД:{props.unit.pointAction}/{props.unit.maxPointAction}</span>
                </div>
            </React.Fragment>
        }
        else {
            return <React.Fragment key={key}>
                <div
                    className="modal-fight--element"
                >
                </div>
            </React.Fragment>
        }
    });
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
                <UserInfoTooltip
                    key={unit.id}
                    unit={unit}
                />
                <span className={`unit-info-${unit.id}`}>
                    <u>{unit.name} ОД({unit.pointAction}/{unit.maxPointAction}) </u>
                    <br />
                    <span style={{ fontSize: 13 }}>Здоровье: {unit.hp} ({unit.maxHp}) / Мана: {unit.mana}  ({unit.maxMana})</span>
                </span>
            </div>
        )
    )
}

//отображает на линии сражения информацию некоторое время
const FightLineInfo = ({ info, isLineInfoActive, setLineInfoActive }) => {
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        if (counter >= 0) {
            setTimeout(() => setCounter(counter - 1), 600);
        }
        else {
            setLineInfoActive(false);
        }
    }, [counter]);

    if (isLineInfoActive) {
        return (<span className="fight-line--info">{info}</span>);
    }
}

//таймер раунда
const Timer = ({ endRoundTimer, getFightState, setModalActive }) => {
    const [counter, setCounter] = useState("");
    let timeToEndRound = ((Math.round(endRoundTimer / 1000 - Date.now() / 1000)));

    useEffect(() => {
        if (counter >= 0) {
            setTimeout(() => setCounter(timeToEndRound - 1), 1000);
        }
        else {
            setModalActive(false);
            getFightState();
            setCounter(60);
        }
    }, [counter]);
    return (
        <span>До конца раунда {counter} сек</span>
    )
}

//доступные умения unit
const UnitAbility = ({ isMyTeam, ability, setHitAbility, unit }) => {
    return <>
        {Array.from(ability).map(a => {
            if (isMyTeam() && ["RECOVERY", "BOOST"].includes(a.applyType)) {
                return (
                    <ActionButton
                        key={a.id}
                        description={a.description}
                        name={a.name}
                        onClick={() => setHitAbility(a.id, unit.id)}
                    />);
            }
            else if (!isMyTeam() && ["DAMAGE", "LOWER"].includes(a.applyType)) {
                return (
                    <ActionButton
                        key={a.id}
                        description={a.description}
                        name={a.name}
                        onClick={() => setHitAbility(a.id, unit.id)}
                    />);
            }
        }
        )}
    </>
}

export default Fight;