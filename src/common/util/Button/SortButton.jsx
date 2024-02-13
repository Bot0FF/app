import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';

const SortButton = (props) => {
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
                        border: "1px dashed #574444",
                        borderRadius: "10px",
                        marginTop: 3,
                        marginBottom: 3,
                        width: 70                      
                    }
                }
            ]
        }
    }
});

export default SortButton;