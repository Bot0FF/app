import "./main.css";
import React from "react";

const Main = (props) => {
    return (
        <div className="user-state">
            <div>
                <a>LOCATION: {props.props.content}</a>
            </div>
            <div>
                <a>HP: {props.props.player.hp}</a>
            </div>
            <div>
                <a>MANA: {props.props.player.mana}</a>
            </div>
            <div>
                <a>POSITION: {props.props.player.x} / {props.props.player.y}</a>
            </div>
            <div className="button-item">
                <div>
                    <button onClick={() => props.props.setMoveUp()}>Север</button>
                </div>
                <div>
                    <button onClick={() => props.props.setMoveLeft()}>Запад</button>
                    <button onClick={() => props.props.setMoveRight()}>Восток</button>
                </div>
                <div>
                    <button onClick={() => props.props.setMoveDown()}>Юг</button>
                </div>
            </div>
        </div>
    );
};

export default Main;