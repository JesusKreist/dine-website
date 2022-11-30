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

const MenuHighlights = () => {
  return (
    <Box
      bgColor="black"
      color="white"
      paddingLeft="10rem"
      paddingRight="10rem"
      paddingTop="14rem"
      paddingBottom="6rem"
    >
      <Flex justifyContent="space-between">
        <RestaurantShowcaseText
          heading="A few highlights from our menu"
          text="We cater for all dietary requirements, but here's a glimpse at some 
        of our diner's favourites. Our menu is revamped every season."
        />
        <Box>
          <VStack spacing="2rem">
            <MenuHighlightsShowcase
              heading="Seared Salmon Filet"
              text="Our locally sourced salmon served with a refreshing buckwheat summer
          salad."
              imageSrc="homepage/salmon-desktop-tablet.jpg"
            />

            <Box opacity="0.9" width="100%">
              <Divider />
            </Box>

            <MenuHighlightsShowcase
              heading="Rosemary Filet Mignon"
              text="Our prime beef served to your taste with a delicious choice of seasonal sides."
              imageSrc="homepage/beef-desktop-tablet.jpg"
            />

            <Box opacity="0.9" width="100%">
              <Divider />
            </Box>

            <MenuHighlightsShowcase
              heading="Summer Fruit Chocolate Mousse"
              text="Creamy mousse combined with summer fruits and dark chocolate servings."
              imageSrc="homepage/chocolate-desktop-tablet.jpg"
            />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default MenuHighlights;
