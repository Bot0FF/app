import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import "./main.css";
import { Context } from "../../index";
import MoveBtn from "../movebtn/MoveBtn";
import Tooltip from "@mui/material/Tooltip";

const Main = () => {
    const { stateUser } = useContext(Context);

    return (
        <div>
            <div className="user-state">
                <div className="map-item">
                    <a>MAP</a>
                </div>
                <div className="hp-item">
                    <Tooltip title="HP" placement="top" arrow>
                        <a>HP: {100}</a>
                    </Tooltip>
                </div>
                <div className="mana-item">
                    <Tooltip title="MANA" placement="top" arrow>
                        <a>MANA: {100}</a>
                    </Tooltip>
                </div>
                <div className="position-item">
                    <a>POSITION: {stateUser.user.posY}</a>
                </div>
            </div>
            <MoveBtn />
        </div>
    );
};

export default observer(Main);