import React, {useContext} from "react";
import "./moveBtn.css";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import MainService from "../../services/MainService"
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const MoveBtn = () => {
    const {stateUser} = useContext(Context);

    let moveUp = async () => {
        const response = await MainService.moveUser("up");
        stateUser.setUser(response.data);
    }

    let moveLeft = async () => {
        const response = await MainService.moveUser("left");
        stateUser.setUser(response.data);
    }

    let moveRight = async () => {
        const response = await MainService.moveUser("right");
        stateUser.setUser(response.data);
    }

    let moveDown = async () => {
        const response = await MainService.moveUser("down");
        stateUser.setUser(response.data);
    }

    return (
        <Box>
            <div className="move-btn-up">
            <Button 
                variant="outlined" 
                size="medium"
                onClick={moveUp}
                >Север
            </Button>
            </div>
            <div className="move-btn-left-right">
            <Button 
                variant="outlined" 
                size="medium"
                onClick={moveLeft}
                >Запад
            </Button>
            <Button 
                variant="outlined" 
                size="medium"
                onClick={moveRight}
                >Восток
            </Button>
            </div>
            <div className="move-btn-down">
            <Button 
                variant="outlined" 
                size="medium"
                onClick={moveDown}
                >Юг
            </Button>
            </div>
        </Box>
    );
};

export default observer(MoveBtn);