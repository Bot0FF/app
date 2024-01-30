import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';

const BoldButton = (props) => {
  return (
    <div>
      <ThemeProvider theme={CustomTheme}>
        <Button
          variant="bold"
          onClick={() => props.move()}
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
            color: "#8b6e6e",
            border: "2px solid #493a3a",
            width: 100
          }
        }
      ]
    }
  }
});

export default BoldButton;