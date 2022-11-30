import { Box, Grid, Image, Heading, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import EnjoyablePlace from "./EnjoyablePlace";
import Events from "./Events";
import LocalFood from "./LocalFood";
import MenuHighlights from "./MenuHighlights";

const RestaurantShowcase = () => {
  return (
    <Box>
      <Grid
        templateColumns="50% 50%"
        marginTop="-5rem"
        rowGap="8rem"
        paddingLeft="10rem"
        marginBottom="-5rem"
      >
        <EnjoyablePlace />
        <LocalFood />
      </Grid>
      <MenuHighlights />
      <Events />
    </Box>
  );
};

export default RestaurantShowcase;
