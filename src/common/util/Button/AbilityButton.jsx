import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Tooltip, Button, createTheme } from '@mui/material';

const AbilityButton = (props) => {

    return (<>
        <ThemeProvider theme={ButtonTheme}>
            <Tooltip
                theme={ButtonTheme}
                title={props.description}
                placement="top"
                disableInteractive
                arrow>
                <Button
                    variant="bold"
                    onClick={() => props.onClick()}
                >
                    {props.name}
                </Button>
            </Tooltip>
        </ThemeProvider>
    </>
    );
};

const ButtonTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "bold" },
                    style: {
                        color: "#816767",
                        marginBottom: "1px",
                        border: "1px solid #574444",
                        width: "100%",
                        fontSize: "11px",
                        cursor: "default"
                    }
                }
            ]
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    textAlign: "center",
                }
            }
        }
    }
});

export default AbilityButton;