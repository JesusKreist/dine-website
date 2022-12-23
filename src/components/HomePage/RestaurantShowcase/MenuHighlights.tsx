import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import MenuHighlightsShowcase from "./MenuHighlightsShowcase";
import RestaurantShowcaseText from "./RestaurantShowcaseText";

const HighLightDivider = () => (
  <Box opacity="0.9" width={{ base: "90%", md: "100%" }}>
    <Divider />
  </Box>
);

const MenuHighlights = () => {
  return (
    <Box
      bgColor="black"
      color="white"
      paddingLeft={{ lg: "10rem" }}
      paddingRight={{ lg: "10rem" }}
      paddingTop={{ base: "5rem", md: "unset", lg: "14rem" }}
      paddingBottom={{ base: "5rem", md: "unset", lg: "6rem" }}
      height={{ md: "891px", lg: "unset" }}
    >
      <Flex
        height={{ md: "100%", lg: "unset" }}
        justifyContent={{ base: "space-evenly", lg: "space-between" }}
        alignItems={{ md: "center", lg: "unset" }}
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "8rem", md: "unset" }}
      >
        <RestaurantShowcaseText
          heading="A few highlights from our menu"
          text="We cater for all dietary requirements, but here's a glimpse at some 
        of our diner's favourites. Our menu is revamped every season."
          withDivider
        />
        <Box>
          <VStack spacing="2rem">
            <MenuHighlightsShowcase
              heading="Seared Salmon Filet"
              text="Our locally sourced salmon served with a refreshing buckwheat summer
          salad."
              imageName="salmon"
            />

            <HighLightDivider />

            <MenuHighlightsShowcase
              heading="Rosemary Filet Mignon"
              text="Our prime beef served to your taste with a delicious choice of seasonal sides."
              imageName="beef"
            />

            <HighLightDivider />

            <MenuHighlightsShowcase
              heading="Summer Fruit Chocolate Mousse"
              text="Creamy mousse combined with summer fruits and dark chocolate servings."
              imageName="chocolate"
            />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default MenuHighlights;
