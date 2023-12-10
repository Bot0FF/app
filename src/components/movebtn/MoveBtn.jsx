import React from "react";
import "./moveBtn.css";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { moveUser } from "../../services/MainService";

const MoveBtn = () => {

    let move = async (direction) => {
        moveUser(direction);
    }

    return (
        <Box>
            <div className="move-btn-up">
            <Button 
                variant="outlined" 
                size="medium"
                onClick={() => move("up")}
                >Север
            </Button>
            </div>
            <div className="move-btn-left-right">
            <Button 
                variant="outlined" 
                size="medium"
                onClick={() => move("left")}
                >Запад
            </Button>
            <Button 
                variant="outlined" 
                size="medium"
                onClick={() => move("right")}
                >Восток
            </Button>
            </div>
            <div className="move-btn-down">
            <Button 
                variant="outlined" 
                size="medium"
                onClick={() => move("down")}
                >Юг
            </Button>
            </div>
        </Box>
    );
};

export default MoveBtn;