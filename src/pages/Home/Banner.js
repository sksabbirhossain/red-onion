import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { SearchBox } from "../../components/styled/Banner.styles/SearchBox";

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        background: "url(https://i.ibb.co/6RTZ812/bannerbackground.png)",
        backgroundPosition: "center",
        backgroundSize: "110%",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="600">
              Best Food Waiting for your Belly
            </Typography>
          </Box>
          <SearchBox>
            <input type="search" placeholder="Search Food" />
            <button>Search</button>
          </SearchBox>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
