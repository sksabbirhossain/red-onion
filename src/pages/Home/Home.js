import { Stack } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import FoodCateory from "./FoodCateory";

const Home = () => {
  return (
    <Stack spacing={5}>
      <Banner />
      <FoodCateory />
    </Stack>
  );
};

export default Home;
