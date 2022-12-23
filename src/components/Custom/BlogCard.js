import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../images/image.png";

const BlogCard = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        width: "350px",
        borderRadius: "20px",
          padding: "20px 5px",
          "&:hover": {
              cursor: "pointer",
              boxShadow: "0 0 1px 0px"
        }
      }}
    >
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          padding: "0 20px",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Fast Delevery
        </Typography>
        <Typography variant="p">
          Keep your systems in sync with automated web hook based notifications
          each time link is paid and how we dream about our future.
        </Typography>
        <Box>
          <Button
            variant="text"
            sx={{
              padding: "0",
            }}
            endIcon={<ArrowCircleRightIcon />}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default BlogCard;
