import React from 'react';
import { Button } from '@mui/material';

const MoveButton = (props) => {
    return (
        <div>
            <Button
                variant="bold"
                style={{
                    color: "#816767",
                    marginBottom: "1px",
                    fontSize: "14px",
                    border: "2px solid #574444",
                    fontWeight: "bold",
                    borderRadius: 8,
                    width: 100,
                    height: 35,
                }}
                onClick={() => props.onClick()}
            >
                {props.name}
            </Button>
        </div>
    );
};

const EntityButton = (props) => {
    return (<>
        <Button
            variant="bold"
            style={{
                fontWeight: "bold",
                color: "#816767",
                border: "2px solid #574444",
                borderRadius: "10px",
                width: "100%",
                marginTop: 3,
            }}
            onClick={() => props.onClick()}
        >
            {props.name}
        </Button>
    </>
    );
};

const ActionButton = (props) => {
    return (<>
        <Button
            variant="outlined"
            size="small"
            style={{
                fontWeight: "bold",
                color: "#816767",
                border: "2px solid #574444",
                borderRadius: "10px",
                width: "250px",
                marginTop: 3,
            }}
            onClick={() => props.onClick()}
        >
            {props.name}
        </Button>
    </>
    );
};

export {
    EntityButton,
    MoveButton,
    ActionButton
};