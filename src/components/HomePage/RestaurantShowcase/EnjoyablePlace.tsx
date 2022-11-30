import { Box, Image } from "@chakra-ui/react";
import React, { Fragment } from "react";
import RestaurantShowcaseText from "./RestaurantShowcaseText";

const EnjoyablePlace = () => {
  return (
    <Fragment>
      <Box height="720px">
        <Image
          src="/homepage/enjoyable-place-desktop@2x.jpg"
          alt="image describing the location for the family"
          objectFit="cover"
          height="100%"
        />
        <Box width="895px" marginLeft="-10rem" zIndex="-1" opacity="0.8">
          <Image
            src="patterns/pattern-curve-top-right.svg"
            alt="curve pattern"
            objectFit="contain"
            position="relative"
            bottom="400px"
          />
        </Box>
      </Box>

      <RestaurantShowcaseText
        heading="Enjoyable place for all the family"
        text="Our relaxed surroundings make dining with us a great experience for
        everyone. We can even arrange a tour of the farm before your meal."
        withLeftPadding
      />
    </Fragment>
  );
};

export default EnjoyablePlace;
