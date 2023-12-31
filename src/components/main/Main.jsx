import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

const Main = (props) => {
    return (
        <div>
            <div className="main-button">
                <div>
                    <NavLink to="/mail">
                        <button>Почта</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/library">
                        <button>Библиотека</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/players">
                        <button>Игроки</button>
                    </NavLink>
                </div>
            </div>
            <div className="user-state">
                <div>
                    <a>LOCATION: {props.content}</a>
                </div>
                <div>
                    <a>HP: {props.player.hp}</a>
                </div>
                <div>
                    <a>MANA: {props.player.mana}</a>
                </div>
                <div>
                    <a>POSITION: {props.player.x} / {props.player.y}</a>
                </div>
                <div className="button-item">
                    <div>
                        <button disabled={props.isHandling} onClick={() => props.onMovePlayer("up")}>Север</button>
                    </div>
                    <div>
                        <button disabled={props.isHandling} onClick={() => props.onMovePlayer("left")}>Запад</button>
                        <button disabled={props.isHandling} onClick={() => props.onMovePlayer("right")}>Восток</button>
                    </div>
                    <div>
                        <button disabled={props.isHandling} onClick={() => props.onMovePlayer("down")}>Юг</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;