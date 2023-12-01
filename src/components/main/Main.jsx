import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import "./main.css";
import { Context } from "../../index";

import MoveBtn from "../movebtn/MoveBtn";
import Tooltip from "@mui/material/Tooltip";

const Hp = ({hp}) => {
    return <div className="hp-item">
        <Tooltip title="HP" placement="top" arrow>
            <a>HP: {hp}</a>
        </Tooltip>
    </div>
}

const Mana = ({mana}) => {
    return <div className="mana-item">
        <Tooltip title="MANA" placement="top" arrow>
            <a>MANA: {mana}</a>
        </Tooltip>
    </div>
}

const Position = ({position}) => {
    console.log(position)
    return <div className="position-item">
        <a>POSITION: {position}</a>
    </div>
}

const Main = () => {
    const {store} = useContext(Context);

    return (
        <div>
            <div className="user-state">
                <div className="map-item">
                    <a>MAP</a>
                </div>
                <Hp hp={store.user.hp}/>
                <Mana mana={store.user.mana}/>
                <Position position={store.user.posX}/>
            </div>
            <MoveBtn/>
        </div>
    );
};

export default observer(Main);