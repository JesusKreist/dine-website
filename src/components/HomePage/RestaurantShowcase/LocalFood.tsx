import { Box, Image, Flex } from "@chakra-ui/react";
import React, { Fragment } from "react";
import RestaurantShowcaseText from "./RestaurantShowcaseText";

const LocalFood = () => {
  return (
    <Fragment>
      <Box display={{ base: "none", lg: "flex" }}>
        <RestaurantShowcaseText
          heading="The most locally sourced food"
          text="All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food."
          withDivider
        />
      </Box>

      <Box
        position="relative"
        height={{ base: "400px", md: "360px", lg: "720px" }}
        width={{ base: "327px", md: "573px", lg: "unset" }}
        margin={{ base: "0 auto", lg: "unset" }}
      >
        <Box as="picture">
          <Box
            as="source"
            media="(max-width: 400px)"
            srcSet="/homepage/locally-sourced-mobile@2x.jpg"
          ></Box>
          <Box
            as="source"
            media="(min-width: 400px) and (max-width: 1200px)"
            srcSet="/homepage/locally-sourced-tablet@2x.jpg"
          ></Box>
          <Image
            boxShadow="2xl"
            src="/homepage/locally-sourced-desktop@2x.jpg"
            alt="image showing locally sourced food"
            objectFit="contain"
            height="100%"
            marginLeft={{ lg: "-4rem" }}
          />
        </Box>

        <Box
          position="relative"
          bottom={{ md: "-290px", lg: "unset" }}
          className="second_pic_box"
          left={{ md: "530px", lg: "unset" }}
          zIndex="-1"
          width={{ lg: "895px" }}
          marginLeft={{ md: "-14rem", lg: "-16rem" }}
          height={{ md: "320px", lg: "unset" }}
          display={{ base: "none", md: "block" }}
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
          display={{ base: "none", md: "block" }}
        >
          <Image src="patterns/pattern-lines.svg" alt="lines pattern" />
        </Box>
      </Box>
      <Box
        display={{ base: "flex", lg: "none" }}
        zIndex="2"
        paddingBottom={{ base: "7.5rem", md: "unset" }}
      >
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
