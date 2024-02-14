import React from 'react';
import { Tooltip, Button } from '@mui/material';

const ActionButton = (props) => {

    return (<>
        <Tooltip
            title={props.description}
            placement="top"
            style={{
                textAlign: "center"
            }}
            disableInteractive
            arrow
        >
            <Button
                variant="bold"
                style={{
                    color: "#816767",
                    marginBottom: "1px",
                    border: "1px solid #574444",
                    width: "200px",
                    fontSize: "11px",
                    borderRadius: "10px"
                }}
                onClick={() => props.onClick()}
            >
                {props.name}
            </Button>
        </Tooltip>
    </>
    );
};

export {
    ActionButton
}