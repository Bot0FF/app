import React from "react";
import { observer } from "mobx-react-lite";
import "./main.css";

import MoveBtn from "../movebtn/MoveBtn";
import Tooltip from "@mui/material/Tooltip";

const Hp = (props) => {
    return <div className="hp-item">
        <Tooltip title="HP" placement="top" arrow>
            <a>MANA: {props}</a>
        </Tooltip>
    </div>
}

const Mana = (props) => {
    return <div className="mana-item">
        <Tooltip title="MANA" placement="top" arrow>
            <a>MANA: {props}</a>
        </Tooltip>
    </div>
}

const Position = (props) => {
    return <div className="position-item">
        <a>POSITION: {props}</a>
    </div>
}

const Main = () => {

    return (
        <div>
            <div className="user-state">
                <div className="map-item">
                    <a>MAP</a>
                </div>
                <Hp/>
                <Mana/>
                <Position/>
            </div>
            <MoveBtn/>
        </div>
    );
};

export default observer(Main);