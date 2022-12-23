import { Stack } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import FoodCateory from "./FoodCateory";
import HomeBlogs from "./HomeBlogs";

const Home = () => {
  return (
    <Stack spacing={5}>
      <Banner />
      <FoodCateory />
      <HomeBlogs/>
    </Stack>
  );
};

export default Home;
