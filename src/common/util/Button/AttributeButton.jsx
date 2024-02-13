import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';

const AttributeButton = (props) => {

    return (<>
        <ThemeProvider theme={ButtonTheme}>
            <Button
                variant="text"
                size="small"
                onClick={() => props.onClick()}
            >
                +1
            </Button>
        </ThemeProvider>
    </>
    );
};

const ButtonTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "text" },
                    style: {
                        color: "#816767",
                        marginBottom: "1px",
                        border: "1px solid #574444",
                        borderRadius: "10px"
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

export default AttributeButton;