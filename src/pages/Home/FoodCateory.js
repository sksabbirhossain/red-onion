import { Box, Button, Container, Grid } from "@mui/material";
import { margin } from "@mui/system";
import React from "react";
import MealsCard from "../../components/Custom/MealsCard";
import TabButtons from "../../components/Custom/TabButtons";
import useMeals from "../../hooks/useMeals";

const FoodCateory = () => {
  const [value, setValue] = React.useState(0);
  const { meals } = useMeals();
  console.log(meals);
  return (
    <Box>
      <Container>
        <Box mb={5}>
          <TabButtons value={value} setValue={setValue} />
        </Box>
        <Box sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          justifyItems: "center",
          gap: "20px"
        }}>
          {meals?.data?.map((meal) => (
            <MealsCard key={meal._id} meal={meal} />
          ))}
        </Box>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15px"
        }}>
          <Button sx={{
            color: "white",
            borderRadius: "10px"
          }}>Checkout Your Food</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FoodCateory;
