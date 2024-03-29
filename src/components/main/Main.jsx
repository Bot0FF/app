import React, { useState } from "react";
import Modal from "../../common/util/modal/Modal";
import { NavLink } from "react-router-dom";
import { MoveButton, EntityButton, ActionButton } from './../../common/util/button/MainButton';
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
                    <u>{props.location.name}</u>
                }
            </div>
            <div className="info-status--current">
                Здоровье: {props.player.hp} ({props.player.maxHp})
                <br />
                Мана: {props.player.mana} ({props.player.maxMana})
                <br />
                Координаты: {props.location.coordinate}
            </div>
            <div className="button--move">
                <MoveButton
                    name={"Север"}
                    onClick={() => props.movePlayer("up")}
                />
                <div className="button--row">
                    <MoveButton
                        name={"Запад"}
                        onClick={() => props.movePlayer("left")}
                    />
                    <MoveButton
                        name={"Восток"}
                        onClick={() => props.movePlayer("right")}
                    />
                </div>
                <MoveButton
                    name={"Юг"}
                    onClick={() => props.movePlayer("down")}
                />
            </div>
            <div className="button--items">
                {props.location.localityId
                    ?
                    <EntityButton
                        name={props.location.localityName}
                        onClick={() => { props.moveToLocality() }}
                    />
                    :
                    <></>
                }
                {props.location.doorId
                    ?
                    <NavLink
                        to={`/${props.location.locationType}`}
                        className="menu-list--item"
                    >
                        <EntityButton
                            name={props.location.localityName}
                            onClick={() => {  }}
                        />
                    </NavLink>
                    :
                    <></>
                }
                <EntityButton
                    name={`Существа ${props.aisSize}`}
                    onClick={() => setAiToList(!isOpenAis)}
                />
                <CollapsibleList
                    isOpen={isOpenAis}
                    entities={props.ais}
                    setModal={setModal}
                />
                <EntityButton
                    name={`Герои ${props.unitsSize}`}
                    onClick={() => setUnitsToList(!isOpenUnits)}
                />
                <CollapsibleList
                    isOpen={isOpenUnits}
                    entities={props.units}
                    setModal={setModal}
                />
                <EntityButton
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
        <Modal
            active={modalActive}
            setActive={setModalActive}
            background={require("../../image/fight.png")}
        >
            {entity.unitType
                ?
                <Unit
                    entity={entity}
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
const Unit = ({ entity, setFight }) => {
    return (<>
        <u>{entity.name}</u>
        <li>Здоровье: {entity.hp}({entity.maxHp})</li>
        <li>Мана: {entity.mana}({entity.maxMana})</li>
        <li>Физический урон: {entity.physDamage}</li>
        <li>Сила магии: {entity.magModifier}</li>
        <li>Физическиая защита: {entity.physDefense}</li>
        <li>Магическая защита: {entity.magDefense}</li>
        <li>Шанс блокирования: {entity.chanceBlock}%</li>
        <li>Шанс уворота: {entity.chanceEvade}%</li>
        {entity.hp > 0
            ?
            <ActionButton
                name={"Напасть"}
                onClick={() => setFight(entity.id)}
            />
            :
            <ActionButton
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
            <li>Описание: {entity.description}</li>
            <li>Добавляет здоровья: {entity.hp}</li>
            <li>Добавляет маны: {entity.mana}</li>
            <li>Добавляет физического урона: {entity.physDamage}</li>
            <li>Увеличение силы магии: {entity.magModifier}%</li>
            <li>Добавляет физической защиты: {entity.physDefense}</li>
            <li>Добавляет магической защиты: {entity.magDefense}</li>
            <li>Состояние: {entity.condition}/100</li>
        </span>
        <EntityButton
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