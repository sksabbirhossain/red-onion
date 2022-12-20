import { Box, styled } from "@mui/material";

export const SearchBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "400px",
  background: "#ffffff",
  borderRadius: "50px",
  overFlow: "hidden",
  marginTop: "15px",
  "& input": {
    border: "none",
    outline: "none",
    padding: "10px 20px",
    width: "100%",
    borderRadius: "30px",
    fontSize: "16px",
  },
  "& button": {
    position: "absolute",
    right: "0",
    top: "0",
    background: "#f94944",
    border: "none",
    outline: "none",
    padding: "10px 20px",
    color: "#FFFFFF",
    fontSize: "16px",
    borderRadius: "30px",
    cursor: "pointer",
  },
}));
