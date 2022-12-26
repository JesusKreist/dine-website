import { Box, Image } from "@chakra-ui/react";
import React, { Fragment } from "react";
import RestaurantShowcaseText from "./RestaurantShowcaseText";

const EnjoyablePlace = () => {
  return (
    <Fragment>
      <Box
        position="relative"
        height={{ md: "360px", xl: "720px" }}
        width={{ base: "85%", md: "573px", xl: "unset" }}
        margin={{ base: "0 auto", xl: "unset" }}
      >
        <Box as="picture">
          <Box
            as="source"
            media="(max-width: 400px)"
            srcSet="/homepage/enjoyable-place-mobile@2x.jpg"
          ></Box>
          <Box
            as="source"
            media="(min-width: 400px) and (max-width: 990px)"
            srcSet="/homepage/enjoyable-place-tablet@2x.jpg"
          ></Box>
          <Image
            boxShadow="2xl"
            src="/homepage/enjoyable-place-desktop@2x.jpg"
            alt="image describing the location for the family"
            objectFit="contain"
            maxHeight="100%"
            margin={{ base: "0 auto", xl: "unset" }}
          />
        </Box>

        <Box
          display={{ base: "none", xl: "block" }}
          width={{ md: "500px", xl: "895px" }}
          marginLeft={{ md: "-14rem", xl: "-10rem" }}
          height={{ md: "320px", xl: "unset" }}
        >
          <Image
            src="patterns/pattern-curve-top-right.svg"
            alt="curve pattern"
            objectFit={{ md: "cover", xl: "contain" }}
            position="relative"
            bottom={{ md: "170px", xl: "400px" }}
            height="100%"
            zIndex={-1}
          />
        </Box>
      </Box>

      <Box display="flex" paddingBottom={{ base: "5rem", xl: "unset" }}>
        <RestaurantShowcaseText
          heading="Enjoyable place for all the family"
          text="Our relaxed surroundings make dining with us a great experience for
        everyone. We can even arrange a tour of the farm before your meal."
          withLeftPadding
          withDivider
        />
      </Box>
    </Fragment>
  );
};

export default EnjoyablePlace;
