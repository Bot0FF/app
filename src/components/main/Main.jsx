import React, { useState } from "react";
import Button from '@mui/material/Button';
import Modal from "../../common/util/modal/Modal";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./main.css";


const GetEntityList = (props) => {
    return (
        <>
            <CSSTransition classNames="my-node" in={props.isOpenEnemy} timeout={200} unmountOnExit>
                <ul className="menu__list">
                    {props.entities.map(entity =>
                        <div className="menu__item"
                            key={entity.id}
                            onClick={() => props.setModal(true, entity)}
                        >
                            <span>{entity.name}</span>
                        </div>
                    )}
                </ul>
            </CSSTransition>
        </>
    );
}

const Main = (props) => {
    const [isOpenEnemy, setOpenEnemy] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [enemy, setEnemy] = useState({});

    const setModal = (isActive, enemy) => {
        setModalActive(isActive);
        setEnemy(enemy);
    }

    return (
        <div className="header">
            <div className="parent__content">
                <div className="player__info">
                    <div>
                        <span>Локация: {props.locationName}</span>
                    </div>
                    <div>
                        <span>Здоровье: {props.player.hp}</span>
                    </div>
                    <div>
                        <span>Мана: {props.player.mana}</span>
                    </div>
                    <div>
                        <span>Координаты: {props.x} / {props.y}</span>
                    </div>
                </div>
                <div className="button__move">
                    <Button
                        variant="outlined"
                        style={{ color: "#8b6e6e", border: "2px solid #493a3a" }}
                        disabled={props.isHandling}
                        onClick={() => props.onMovePlayer("up")}
                    >
                        Север
                    </Button>
                    <div className="button__row">
                        <Button
                            variant="outlined"
                            style={{ color: "#8b6e6e", border: "2px solid #493a3a" }}
                            disabled={props.isHandling}
                            onClick={() => props.onMovePlayer("left")}
                        >
                            Запад
                        </Button>
                        <Button
                            variant="outlined"
                            style={{ color: "#8b6e6e", border: "2px solid #493a3a" }}
                            disabled={props.isHandling}
                            onClick={() => props.onMovePlayer("right")}
                        >
                            Восток
                        </Button>
                    </div>
                    <Button
                        variant="outlined"
                        style={{ color: "#8b6e6e", border: "2px solid #493a3a" }}
                        disabled={props.isHandling}
                        onClick={() => props.onMovePlayer("down")}
                    >
                        Юг
                    </Button>
                </div>
                <div>
                    <div className="button__items">
                        <Button
                            variant="outlined"
                            style={{ color: "#8b6e6e", border: "2px solid #493a3a" }}
                            onClick={() => setOpenEnemy(!isOpenEnemy)}
                        >
                            Существа {props.enemies.length}
                        </Button>
                        <GetEntityList
                            isOpenEnemy={isOpenEnemy}
                            entities={props.enemies}
                            setModal={setModal} />
                        <Button
                            variant="outlined"
                            style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
                            onClick={() => setOpenEnemy(!isOpenEnemy)}
                        >
                            Герои {props.players.length}
                        </Button>
                        <Button
                            variant="outlined"
                            style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
                            onClick={() => setOpenEnemy(!isOpenEnemy)}
                        >
                            Вещи под ногами {0}
                        </Button>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <span>
                    {enemy.name} / Здоровье: {enemy.hp}
                </span>
                <NavLink to="/battle">
                    <Button
                        variant="outlined"
                        style={{ color: "#8b6e6e", border: "2px solid #493a3a", marginTop: 3 }}
                    >
                        Напасть
                    </Button>
                </NavLink>
            </Modal>
        </div>
    );
};

export default Main;