import { Box, Image } from "@chakra-ui/react";
import React, { Fragment } from "react";
import RestaurantShowcaseText from "./RestaurantShowcaseText";

const LocalFood = () => {
  return (
    <Fragment>
      <RestaurantShowcaseText
        heading="The most locally sourced food"
        text="All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food."
      />

      <Box height="720px">
        <Image
          src="/homepage/locally-sourced-desktop@2x.jpg"
          alt="image showing locally sourced food"
          objectFit="contain"
          height="100%"
          marginLeft="-4rem"
        />
        <Box
          width="895px"
          marginLeft="-16rem"
          position="relative"
          bottom="400px"
          zIndex="-1"
        >
          <Image
            src="patterns/pattern-curve-top-left.svg"
            alt="curve pattern"
            objectFit="contain"
          />
        </Box>
        <Box
          width="160px"
          position="absolute"
          bottom="780px"
          marginLeft="27rem"
        >
          <Image src="patterns/pattern-lines.svg" alt="lines pattern" />
        </Box>
      </Box>
    </Fragment>
  );
};

export default LocalFood;
