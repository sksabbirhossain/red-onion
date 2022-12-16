import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f94944",
      mainBg: "#191919",
      hover: "#ff9caf",
      grayText: "#727272",
      blackColor: "#191919",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          padding: "5px 20px",
          borderRadius: "40px",
          textTransform: "capitalize",
          color: "#191919",
        },
      },
      defaultProps: {
        variant: "contained",
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#191919",
        },
      },
    },
  },
});
