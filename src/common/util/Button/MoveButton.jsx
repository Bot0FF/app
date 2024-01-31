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
            color: "#816767",
            marginBottom: "1px",
            fontSize: "14px",
            border: "2px solid #493a3a",
            fontWeight: "bold",
            width: 100,
            height: 35
          }
        }
      ]
    }
  }
});

export default BoldButton;