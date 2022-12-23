import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface MenuHighlightsShowcaseProps {
  heading: string;
  text: string;
  imageName: string;
}

const MenuHighlightsShowcase: React.FC<MenuHighlightsShowcaseProps> = ({
  heading,
  text,
  imageName,
}) => {
  return (
    <Flex
      gap="2rem"
      zIndex="2"
      direction={{ base: "column", md: "row" }}
      width={{ base: "90%", md: "unset" }}
    >
      <Flex>
        <Box as="picture">
          <Box
            as="source"
            media="(max-width: 400px)"
            srcSet={`homepage/${imageName}-mobile@2x.jpg`}
          ></Box>
          <Box
            as="source"
            media="(min-width: 400px) and (max-width: 1200px)"
            srcSet={`homepage/${imageName}-desktop-tablet@2x.jpg`}
          ></Box>
          <Image
            position="relative"
            alt="seared salmon fillet"
            src={`homepage/${imageName}-desktop-tablet@2x.jpg`}
            width={{ base: "100%", md: "128px", lg: "128px" }}
          />
        </Box>

        <Box
          maxWidth="100px"
          marginLeft="-3rem"
          paddingTop="1rem"
          zIndex="-1"
          display={{ base: "none", md: "initial" }}
        >
          <Image
            src="patterns/pattern-divide.svg"
            alt="divider image"
            width="100%"
          />
        </Box>
      </Flex>

      <Box
        maxWidth={{ base: "327px", md: "350px" }}
        alignSelf="center"
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading
          as="h3"
          fontSize="26px"
          lineHeight="24px"
          paddingBottom={{ base: "1rem", md: "unset" }}
        >
          {heading}
        </Heading>
        <Text as="p" fontSize="18px" lineHeight="26px">
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

export default MenuHighlightsShowcase;
