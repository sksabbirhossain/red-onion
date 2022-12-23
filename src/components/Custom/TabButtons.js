import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";

const CustomTabs = styled(Tabs)(({ theme }) => ({
  padding: "5px",
  "& .MuiTab-root": {
    textTransform: "capitalize",
    color: "#000000 !importent",
    fontWeight: 600,
    "&:hover": {
      //   color: theme.palette.primary.main,
    },
  },
  "& .Mui-selected": {
    background: theme.palette.primary.main,
    color: "#ffffff",
    borderRadius: "15px",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

const TabButtons = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <CustomTabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </CustomTabs>
    </Box>
  );
};

export default TabButtons;
