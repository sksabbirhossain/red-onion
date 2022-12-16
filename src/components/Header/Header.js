import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Button, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import { FlexBox } from "../styled/FlexBox";
import { MainHeader } from "../styled/MainHeader";

const Header = () => {
  return (
    <MainHeader>
      <Container>
        <FlexBox
          justifyContent="space-between"
          sx={{
            height: "60px",
            width: "100%",
          }}
        >
          <Box>
            <img
              src="https://i.ibb.co/GV0gqff/logo2.png"
              alt=""
              style={{
                width: "150px",
              }}
            />
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <Button variant="text">Sign In</Button>
            <Button>Sign Up</Button>
          </Stack>
        </FlexBox>
      </Container>
    </MainHeader>
  );
};

export default Header;
