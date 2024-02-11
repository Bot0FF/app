import React, { useState } from "react";
import Modal from "../../common/util/modal/Modal";
import MoveButton from "../../common/util/button/MoveButton";
import MainButton from './../../common/util/button/MainButton';
import { CSSTransition } from "react-transition-group";
import "./main.css";

const Main = (props) => {
    const [isOpenAis, setOpenAis] = useState(false);
    const [isOpenUnits, setOpenUnits] = useState(false);
    const [isOpenThings, setOpenThings] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [entity, setEntity] = useState({});

    //делает модальное окно активным и устанавливает в useState выбранную сущность
    const setModal = (isActive, entity) => {
        setModalActive(isActive);
        setEntity(entity);
    }

    //открыть и загрузить список ai на локации
    const setAiToList = (isOpenAis) => {
        setOpenAis(isOpenAis);
        props.getLocationAis();
    }

    //открыть и загрузить список игроков на локации
    const setUnitsToList = (isOpenUnits) => {
        setOpenUnits(isOpenUnits);
        props.getLocationUnits();
    }

    //открыть и загрузить список вещей на локации
    const setThingsToList = (isOpenThings) => {
        setOpenThings(isOpenThings);
        props.getLocationThings();
    }

    //забрать вещь с локации, закрыть модальное окно
    const takeLocationThing = (isActive, thingId) => {
        setModalActive(isActive);
        props.takeLocationThing(thingId);
    }

    return (<>
        <div className="parent-content--main">
            <div className="info-status--notification">
                {props.info
                    ?
                    <u>{props.info}</u>
                    :
                    <u>Локация: {props.locationName}</u>
                }
            </div>
            <div className="info-status--current">
                Здоровье: {props.player.hp} ({props.player.maxHp})
                <br />
                Мана: {props.player.mana} ({props.player.maxMana})
                <br />
                Координаты: {props.x} / {props.y}
            </div>
            <div className="button--move">
                <MoveButton
                    name={"Север"}
                    onClick={() => props.onMovePlayer("up")}
                />
                <div className="button--row">
                    <MoveButton
                        name={"Запад"}
                        onClick={() => props.onMovePlayer("left")}
                    />
                    <MoveButton
                        name={"Восток"}
                        onClick={() => props.onMovePlayer("right")}
                    />
                </div>
                <MoveButton
                    name={"Юг"}
                    onClick={() => props.onMovePlayer("down")}
                />
            </div>
            <div className="button--items">
                <MainButton
                    name={`Существа ${props.aisSize}`}
                    onClick={() => setAiToList(!isOpenAis)}
                />
                <CollapsibleList
                    isOpen={isOpenAis}
                    entities={props.ais}
                    setModal={setModal}
                />
                <MainButton
                    name={`Герои ${props.unitsSize}`}
                    onClick={() => setUnitsToList(!isOpenUnits)}
                />
                <CollapsibleList
                    isOpen={isOpenUnits}
                    entities={props.units}
                    setModal={setModal}
                />
                <MainButton
                    name={`Вещи под ногами ${props.thingsSize}`}
                    onClick={() => setThingsToList(!isOpenThings)}
                />
                <CollapsibleList
                    isOpen={isOpenThings}
                    entities={props.things}
                    setModal={setModal}
                />
            </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            {entity.subjectType === "AI" || entity.subjectType === "UNIT"
                ?
                <Unit
                    entity={entity}
                    player={props.player}
                    setFight={props.setFight}
                />
                :
                <Thing
                    entity={entity}
                    takeLocationThing={takeLocationThing}
                />
            }
        </Modal>
    </>
    );
};


//информация по unit в модальном окне
const Unit = ({ entity, player, setFight }) => {
    return (<>
        <span>
            <u>{entity.name}</u>
            <br />
            <span>Здоровье: {entity.hp}</span>
            <br />
            <span>Мана: {player.mana}</span>
            <br />
            <span>Физический урон: {entity.physDamage}</span>
            <br />
            <span>Сила магии: {player.magModifier} %</span>
            <br />
            <span>Физическиая защита: {entity.physDefense}</span>
            <br />
            <span>Магическая защита: {player.magDefense}</span>
        </span>
        {entity.hp > 0
            ?
            <MainButton
                name={"Напасть"}
                onClick={() => setFight(entity.id)}
            />
            :
            <MainButton
                name={"Осмотреть"}
                onClick={() => { }}
            />
        }
    </>
    );
};

//информация по вещам в модальном окне
const Thing = ({ entity, takeLocationThing }) => {
    return (<>
        <span>
            <u>{entity.name}</u>
            <br />
            <span>Описание: {entity.description}</span>
            <br />
            <span>Добавляет здоровья: {entity.hp}</span>
            <br />
            <span>Добавляет маны: {entity.mana}</span>
            <br />
            <span>Добавляет физического урона: {entity.physDamage}</span>
            <br />
            <span>Добавляет магического урона: {entity.magDamage}</span>
            <br />
            <span>Модификатор магического урона: {entity.magDamageModifier}</span>
            <br />
            <span>Добавляет физической защиты: {entity.physDefense}</span>
            <br />
            <span>Добавляет магической защиты: {entity.magDefense}</span>
        </span>
        <MainButton
            name={"Забрать"}
            onClick={() => takeLocationThing(false, entity.id)}
        />
    </>
    );
};

//разворачивоющийся список сущностей по нажатию на кнопку
const CollapsibleList = (props) => {
    return (<>
        <CSSTransition classNames="my-node" in={props.isOpen} timeout={200} unmountOnExit>
            <ul className="menu--list">
                {Array.from(props.entities).map(entity =>
                    <li
                        key={entity.id}
                        onClick={() => props.setModal(true, entity)}
                    >
                        {entity.hp > 0
                            ?
                            <span>{entity.name} </span>
                            :
                            <span style={{ color: "#744444" }}>{entity.name}</span>
                        }
                    </li>
                )}
            </ul>
        </CSSTransition>
    </>
    );
};


export default Main;