import React from "react";
import "./moveBtn.css";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

const MoveBtn = () => {
    return (
        <Box>
            <div className="move-btn-up">
            <Button variant="outlined" size="medium">
                Север
            </Button>
            </div>
            <div className="move-btn-left-right">
            <Button variant="outlined" size="medium">
                Запад
            </Button>
            <Button variant="outlined" size="medium">
                Восток
            </Button>
            </div>
            <div className="move-btn-down">
            <Button variant="outlined" size="medium">
                Юг
            </Button>
            </div>
        </Box>
    );
};

export default MoveBtn;