import React from 'react';
import { Button } from '@mui/material';

const NavbarButton = (props) => {
    return (<>
        <Button
            variant="bold"
            style={{
                fontWeight: "bold",
                color: "#816767",
                border: "2px solid #574444",
                borderRadius: "10px",
                width: "150px",
            }}
            onClick={() => props.onClick()}
        >
            {props.name}
        </Button>
    </>
    );
};

export {
    NavbarButton
};