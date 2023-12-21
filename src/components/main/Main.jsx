import "./main.css";
import React from "react";

const Main = (props) => {
    return (
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
                    <button onClick={() => props.onMovePlayer("up")}>Север</button>
                </div>
                <div>
                    <button onClick={() => props.onMovePlayer("left")}>Запад</button>
                    <button onClick={() => props.onMovePlayer("right")}>Восток</button>
                </div>
                <div>
                    <button onClick={() => props.onMovePlayer("down")}>Юг</button>
                </div>
            </div>
        </div>
    );
};

export default Main;