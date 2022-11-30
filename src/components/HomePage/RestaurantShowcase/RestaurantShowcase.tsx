import { Box, Grid, Image, Heading, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import EnjoyablePlace from "./EnjoyablePlace";
import LocalFood from "./LocalFood";
import MenuHighlights from "./MenuHighlights";

const RestaurantShowcase = () => {
  return (
    <Box paddingLeft="10rem">
      <Grid templateColumns="50% 50%" marginTop="-4rem" rowGap="8rem">
        <EnjoyablePlace />
        <LocalFood />
      </Grid>
      <MenuHighlights />
    </Box>
  );
};

export default RestaurantShowcase;
