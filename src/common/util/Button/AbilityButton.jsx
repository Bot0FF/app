import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Tooltip, Button, createTheme } from '@mui/material';

const AbilityButton = (props) => {
    const getMinDamage = () => {
        return Math.floor(props.ability.damage * 0.7);
    }

    const getMaxDamage = () => {
        return Math.floor(props.ability.damage * 1.3);
    }


    return (
        <div>
            <ThemeProvider theme={ButtonTheme}>
                <Tooltip
                    theme={ButtonTheme}
                    title={props.ability.description}
                    placement="top"
                    disableInteractive
                    arrow>
                    <Button
                        variant="bold"
                        onClick={() => props.setCurrentHit(props.false, props.ability.id, props.enemy.id)}
                    >
                        <div>
                            <span>{props.ability.name}</span>
                        </div>
                    </Button>
                </Tooltip>
            </ThemeProvider>
        </div>
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
                        fontSize: "11px"
                    }
                }
            ]
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    textAlign: "center",
                    height: "40px"
                }
            }
        }
    }
});

export default AbilityButton;