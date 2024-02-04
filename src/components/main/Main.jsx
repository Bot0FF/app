import React, { useState } from "react";
import Button from '@mui/material/Button';
import Modal from "../../common/util/modal/Modal";
import CollapsibleList from "../../common/util/transition/CollapsibleList";
import MoveButton from "../../common/util/Button/MoveButton";
import "./main.css";
import OpenListButton from "../../common/util/Button/OpenListButton";

const Main = (props) => {
    const [isOpenAis, setOpenAis] = useState(false);
    const [isOpenUnits, setOpenUnits] = useState(false);
    const [isOpenThings, setOpenThings] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [entity, setEntity] = useState({});

    const setModal = (isActive, entity) => {
        setModalActive(isActive);
        setEntity(entity);
    }

    return (
        <div className="header">
            <div className="parent-content--main">
                <div className="player__info">
                    <u>{props.info}</u>
                    <br />
                    <span>Локация: {props.locationName}</span>
                    <br />
                    <span>Здоровье: {props.player.hp} ({props.player.maxHp})</span>
                    <br />
                    <span>Мана: {props.player.mana} ({props.player.maxMana})</span>
                    <br />
                    <span>Координаты: {props.x} / {props.y}</span>
                </div>
                <div className="button__move">
                    <MoveButton
                        move={() => props.onMovePlayer("up")}
                        name={"Север"}
                    />
                    <div className="button__row">
                        <MoveButton
                            move={() => props.onMovePlayer("left")}
                            name={"Запад"}
                        />
                        <MoveButton
                            move={() => props.onMovePlayer("right")}
                            name={"Восток"}
                        />
                    </div>
                    <MoveButton
                        move={() => props.onMovePlayer("down")}
                        name={"Юг"}
                    />
                </div>
                <div>
                    <div className="button__items">
                        <OpenListButton
                            name={`Существа ${props.aisSize}`}
                            setOpen={() => setOpenAis(!isOpenAis)}
                            setEntity={props.getAis}
                        />
                        <CollapsibleList
                            isOpen={isOpenAis}
                            entities={props.ais}
                            setModal={setModal}
                        />
                        <OpenListButton
                            name={`Герои ${props.unitsSize}`}
                            setOpen={() => setOpenUnits(!isOpenUnits)}
                            setEntity={props.getUnits}
                        />
                        <CollapsibleList
                            isOpen={isOpenUnits}
                            entities={props.units}
                            setModal={setModal}
                        />
                        <OpenListButton
                            name={`Вещи под ногами ${props.thingsSize}`}
                            setOpen={() => setOpenThings(!isOpenThings)}
                            setEntity={props.getThings}
                        />
                        <CollapsibleList
                            isOpen={isOpenThings}
                            entities={props.things}
                            setModal={setModal}
                        />
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                {entity.subjectType === "AI" || entity.subjectType === "UNIT"
                    ?
                    <UNIT
                        entity={entity}
                        player={props.player}
                        setFight={props.setFight}
                    />
                    :
                    <THING
                        entity={entity}
                        takeThing={props.takeThing}
                    />
                }


            </Modal>
        </div>
    );
};

const UNIT = ({entity, player, setFight}) => {
    return (<>
        <span>
            <u>{entity.name}</u>
            <br />
            <span>Здоровье: {entity.hp} ({entity.maxHp})</span>
            <br />
            <span>Мана: {player.mana} ({player.maxMana})</span>
        </span>
        {entity.hp > 0
            ?
            <Button
                variant="outlined"
                style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
                onClick={() => setFight(entity.id)}
            >
                Напасть
            </Button>
            :
            <Button
                variant="outlined"
                style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
            >
                Осмотреть
            </Button>
        }
    </>
    );
};

const THING = ({entity, takeThing}) => {
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
            <span>Добавляет урона: {entity.damage}</span>
            <br />
            <span>Добавляет защиты: {entity.defense}</span>
        </span>
        {entity.hp > 0
            ?
            <Button
                variant="outlined"
                style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
                onClick={() => takeThing(entity.id)}
            >
                Забрать
            </Button>
            :
            <Button
                variant="outlined"
                style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
            >
                Осмотреть
            </Button>
        }
    </>
    );
};


export default Main;