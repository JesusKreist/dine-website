import { Box, Grid, Image, Heading, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import EnjoyablePlace from "./EnjoyablePlace";
import Events from "./Events/Events";

import LocalFood from "./LocalFood";
import MenuHighlights from "./MenuHighlights";

const RestaurantShowcase = () => {
  return (
    <Box className="showcase">
      <Grid
        templateColumns={{ lg: "50% 50%" }}
        marginTop={{ base: "-5rem", md: "-5rem" }}
        rowGap={{ base: "2.5rem", md: "2.5rem", lg: "8rem" }}
        paddingLeft={{ lg: "10rem" }}
        marginBottom={{ lg: "-5rem" }}
        paddingBottom={{ md: "8rem", lg: "unset" }}
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
