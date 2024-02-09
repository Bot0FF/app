import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';

const NavbarButton = (props) => {
    return (<>
        <ThemeProvider theme={CustomTheme}>
            <Button
                variant="bold"
                onClick={() => props.onClick()}
            >
                {props.name}
            </Button>
        </ThemeProvider>
    </>
    );
};

const CustomTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "bold" },
                    style: {
                        fontWeight: "bold",
                        color: "#816767",
                        border: "2px solid #574444",
                        borderRadius: "10px",
                        width: "150px",
                    }
                }
            ]
        }
    }
});

export default NavbarButton;