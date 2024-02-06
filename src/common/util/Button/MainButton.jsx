import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';

const MainButton = (props) => {
    return (
        <div>
            <ThemeProvider theme={CustomTheme}>
                {props.getData
                    ?
                    <Button
                        variant="bold"
                        onClick={() => props.getData()}
                    >
                        {props.name}
                    </Button>
                    :
                    <Button
                        variant="bold"
                    >
                        {props.name}
                    </Button>
                }

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
                        marginBottom: 2
                    }
                }
            ]
        }
    }
});

export default MainButton;