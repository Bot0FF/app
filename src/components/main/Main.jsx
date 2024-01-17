import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";
import Modal from "../../common/util/modal/Modal";

const Main = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [modalActive, setModalActive] = useState(true);

    return (
        <div className="header">
            <div className="parent__content">
                <div className="player__info">
                    <div>
                        <text>Локация: {props.locationName}</text>
                    </div>
                    <div>
                        <text>Здоровье: {props.player.hp}</text>
                    </div>
                    <div>
                        <text>Мана: {props.player.mana}</text>
                    </div>
                    <div>
                        <text>Координаты: {props.x} / {props.y}</text>
                    </div>
                </div>
                <div className="button__move">
                    <button disabled={props.isHandling} onClick={() => props.onMovePlayer("up")}>Север</button>
                    <div className="button__row">
                        <button disabled={props.isHandling} onClick={() => props.onMovePlayer("left")}>Запад</button>
                        <button disabled={props.isHandling} onClick={() => props.onMovePlayer("right")}>Восток</button>
                    </div>
                    <button disabled={props.isHandling} onClick={() => props.onMovePlayer("down")}>Юг</button>
                </div>
                <div>
                    <button className="collapsible" onClick={() => setOpen(!isOpen)}>
                        Существа {props.enemies.length}
                    </button>
                    <div className={isOpen ? "items__hidden" : "items__active"}>
                        <ul className="menu__list">
                            {props.enemies.map(enemy =>
                                <a className="menu__item"
                                    key={enemy.id}
                                    onClick={() => setModalActive(true)}
                                >
                                    <text>{enemy.name}</text>
                                </a>
                            )}
                        </ul>
                    </div>
                    <br />
                    <button>Герои {props.players.length}</button>
                    <br />
                    <button>Вещи под ногами {0}</button>
                </div>

            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div>
                    
                </div>
            </Modal>
        </div>
    );
};

export default Main;