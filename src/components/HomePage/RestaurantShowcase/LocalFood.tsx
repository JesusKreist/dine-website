import { Box, Image } from "@chakra-ui/react";
import React, { Fragment } from "react";
import RestaurantShowcaseText from "./RestaurantShowcaseText";

const LocalFood = () => {
  return (
    <Fragment>
      <Box display={{ md: "none", lg: "block" }}>
        <RestaurantShowcaseText
          heading="The most locally sourced food"
          text="All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food."
          withDivider
        />
      </Box>

      <Box
        position="relative"
        height={{ md: "360px", lg: "720px" }}
        width={{ md: "573px", lg: "unset" }}
        margin={{ md: "0 auto", lg: "unset" }}
      >
        <Image
          srcSet="/homepage/locally-sourced-tablet@2x.jpg 768w, /homepage/locally-sourced-desktop@2x.jpg 1440w"
          sizes="(max-width: 1200px) 768px, 1440px"
          src="/homepage/locally-sourced-desktop@2x.jpg"
          alt="image showing locally sourced food"
          objectFit="contain"
          height="100%"
          marginLeft={{ lg: "-4rem" }}
        />
        <Box
          position="relative"
          bottom={{ md: "-290px", lg: "unset" }}
          className="second_pic_box"
          left={{ md: "530px", lg: "unset" }}
          zIndex="-1"
          width={{ lg: "895px" }}
          marginLeft={{ md: "-14rem", lg: "-16rem" }}
          height={{ md: "320px", lg: "unset" }}
        >
          <Image
            src="patterns/pattern-curve-top-left.svg"
            alt="curve pattern"
            objectFit={{ md: "cover", lg: "contain" }}
            objectPosition={{ md: "left", lg: "unset" }}
            position="relative"
            bottom={{ md: "130px", lg: "400px" }}
            height="100%"
            zIndex={-1}
          />
        </Box>
        <Box
          width="160px"
          position="relative"
          bottom={{ md: "450px", lg: "760px" }}
          marginLeft={{ md: "29rem", lg: "27rem" }}
        >
          <Image src="patterns/pattern-lines.svg" alt="lines pattern" />
        </Box>
      </Box>
      <Box display={{ md: "block", lg: "none" }} zIndex="2">
        <RestaurantShowcaseText
          heading="The most locally sourced food"
          text="All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food."
          withDivider
        />
      </Box>
    </Fragment>
  );
};

export default LocalFood;
