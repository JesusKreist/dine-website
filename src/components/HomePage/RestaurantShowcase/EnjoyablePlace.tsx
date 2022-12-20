import { Box, Image } from "@chakra-ui/react";
import React, { Fragment } from "react";
import RestaurantShowcaseText from "./RestaurantShowcaseText";

const EnjoyablePlace = () => {
  return (
    <Fragment>
      <Box
        position="relative"
        height={{ md: "360px", lg: "720px" }}
        width={{ md: "573px", lg: "unset" }}
        margin={{ md: "0 auto", lg: "unset" }}
      >
        <Image
          srcSet="/homepage/enjoyable-place-tablet@2x.jpg 768w, /homepage/enjoyable-place-desktop@2x.jpg 1440w"
          sizes="(max-width: 1200px) 768px, 1440px"
          src="/homepage/enjoyable-place-desktop@2x.jpg"
          alt="image describing the location for the family"
          objectFit="cover"
          height="100%"
        />
        <Box
          width={{ md: "500px", lg: "895px" }}
          marginLeft={{ md: "-14rem", lg: "-10rem" }}
          height={{ md: "320px", lg: "unset" }}
        >
          <Image
            src="patterns/pattern-curve-top-right.svg"
            alt="curve pattern"
            objectFit={{ md: "cover", lg: "contain" }}
            position="relative"
            bottom={{ md: "170px", lg: "400px" }}
            height="100%"
            zIndex={-1}
          />
        </Box>
      </Box>

      <RestaurantShowcaseText
        heading="Enjoyable place for all the family"
        text="Our relaxed surroundings make dining with us a great experience for
        everyone. We can even arrange a tour of the farm before your meal."
        withLeftPadding
        withDivider
      />
    </Fragment>
  );
};

export default EnjoyablePlace;
