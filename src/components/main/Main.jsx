import React from "react";
import "./main.css";
import MoveBtn from "../movebtn/MoveBtn";
import Tooltip from "@mui/material/Tooltip";

const Main = () => {

    return (
        <div>
            <div className="user-state">
                <div className="map-item">
                    <a>MAP</a>
                </div>
                <div className="hp-item">
                    <Tooltip title="HP" placement="left" arrow>
                        <a>HP: </a>
                    </Tooltip>
                </div>
                <div className="mana-item">
                    <Tooltip title="MANA" placement="right" arrow>
                        <a>MANA:</a>
                    </Tooltip>
                </div>
                <div className="position-item">
                    <a>POSITION:</a>
                </div>
            </div>
            <MoveBtn />
        </div>
    );
};

export default Main;