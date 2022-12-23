import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import BlogCard from "../../components/Custom/BlogCard";

const HomeBlogs = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={2}>
          <Typography variant="h5">Why you choose Us</Typography>
          <Typography variant="p" maxWidth={{ xs: "100%", sm: "550px" }}>
            Barton waited twenty always repair in whitin we do. An delighted
            offending curiosity my is dashwoods at. Boy prosperous increasing
            surrounded
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </Box>
          <Box></Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomeBlogs;
