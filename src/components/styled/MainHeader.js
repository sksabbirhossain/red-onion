import { Box, styled } from "@mui/material";

export const MainHeader = styled(Box)(({ theme }) => ({
  background: "rgba(2, 1, 5, .1)",
  backdropFilter: "blur(2px)",
  // boxShadow: "0px 1px 5px 0px",
  position: "fixed",
  width: "100%",
}));
