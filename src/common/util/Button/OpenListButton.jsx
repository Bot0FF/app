import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';

const OpenListButton = (props) => {
    return (
        <div>
            <ThemeProvider theme={CustomTheme}>
                <Button
                    variant="bold"
                    onClick={() => props.setOpen()}
                >
                    {props.name}
                </Button>
            </ThemeProvider>
        </div>
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
                        width: "100%",
                        marginBottom: 1
                    }
                }
            ]
        }
    }
});

export default OpenListButton;