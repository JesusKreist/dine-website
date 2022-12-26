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
        columnGap={{ base: "unset", lg: "2rem", xl: "unset" }}
        marginTop={{ base: "-5rem", md: "-5rem" }}
        rowGap={{ base: "2.5rem", md: "2.5rem", xl: "8rem" }}
        paddingLeft={{ lg: "3rem", "2xl": "10rem" }}
        marginBottom={{ xl: "-5rem" }}
        paddingBottom={{ md: "3rem", xl: "unset" }}
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
