import React from 'react';
import { Button } from '@mui/material';

const MenuButton = (props) => {
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

const InventoryButton = (props) => {
    return (<>
        <Button
            variant="outlined"
            style={{
                color: "#816767",
                border: "2px solid #574444",
                borderRadius: "10px",
                margin: "2px",
                marginTop: "5px"
            }}
            onClick={() => props.onClick()}
        >
            {props.name}
        </Button>
    </>
    );
};

const SortButton = (props) => {
    return (<>
        <Button
            variant="bold"
            style={{
                fontWeight: "bold",
                color: "#816767",
                border: "1px dashed #574444",
                borderRadius: "10px",
                marginTop: 3,
                marginBottom: 3,
                width: 70
            }}
            onClick={() => props.onClick()}
        >
            {props.name}
        </Button>
    </>
    );
};

export {
    MenuButton,
    InventoryButton,
    SortButton
};