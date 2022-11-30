import { Box, Image } from "@chakra-ui/react";
import React, { Fragment } from "react";
import RestaurantShowcaseText from "./RestaurantShowcaseText";

const MenuHighlights = () => {
  return (
    <Box bgColor="black" color="white">
      <RestaurantShowcaseText
        heading="Enjoyable place for all the family"
        text="Our relaxed surroundings make dining with us a great experience for
        everyone. We can even arrange a tour of the farm before your meal."
      />
    </Box>
  );
};

export default MenuHighlights;
