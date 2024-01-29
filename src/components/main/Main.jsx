import React, { useState } from "react";
import Button from '@mui/material/Button';
import Modal from "../../common/util/modal/Modal";
import CollapsibleList from "../../common/util/transition/CollapsibleList";
import MoveButton from "../../common/util/Button/MoveButton";
import "./main.css";
import OpenListButton from "../../common/util/Button/OpenListButton";

const Main = (props) => {
    const [isOpenEnemy, setOpenEnemy] = useState(false);
    const [isOpenPlayer, setOpenPlayer] = useState(false);
    const [isOpenThing, setOpenThing] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [entity, setEntity] = useState({});

    const setModal = (isActive, entity) => {
        setModalActive(isActive);
        setEntity(entity);
    }

    return (
        <div className="header">
            <div className="parent__content">
                <div className="player__info">
                    <u>{props.info}</u>
                    <br />
                    <span>Локация: {props.locationName}</span>
                    <br />
                    <span>Здоровье: {props.player.hp}</span>
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
                            name={`Существа ${props.enemies.length}`}
                            setOpen={() => setOpenEnemy(!isOpenEnemy)}
                        />
                        <CollapsibleList
                            isOpen={isOpenEnemy}
                            entities={props.enemies}
                            setModal={setModal}
                        />
                        <OpenListButton
                            name={`Герои ${props.players.length}`}
                            setOpen={() => setOpenPlayer(!isOpenPlayer)}
                        />
                        <CollapsibleList
                            isOpen={isOpenPlayer}
                            entities={props.players}
                            setModal={setModal}
                        />
                        <OpenListButton
                            name={`Вещи под ногами ${0}`}
                            setOpen={() => setOpenThing(!isOpenThing)}
                        />
                        <CollapsibleList
                            isOpen={isOpenThing}
                            entities={[]}
                            setModal={setModal}
                        />
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <span>
                    {entity.name} / Здоровье: {entity.hp}
                </span>
                <Button
                    variant="outlined"
                    style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
                    onClick={() => props.setFight(entity.id)}
                >
                    Напасть
                </Button>
            </Modal>
        </div>
    );
};

export default Main;