import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';

const MoveButton = (props) => {
  return (
    <div>
      <ThemeProvider theme={CustomTheme}>
        <Button
          variant="bold"
          onClick={() => props.onClick()}
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
            color: "#816767",
            marginBottom: "1px",
            fontSize: "14px",
            border: "2px solid #574444",
            fontWeight: "bold",
            borderRadius: 8,
            width: 100,
            height: 35,
            cursor: "default"
          }
        }
      ]
    }
  }
});

export default MoveButton;