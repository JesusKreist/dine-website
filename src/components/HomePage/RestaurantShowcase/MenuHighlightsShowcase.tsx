import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface MenuHighlightsShowcaseProps {
  heading: string;
  text: string;
  imageSrc: string;
}

const MenuHighlightsShowcase: React.FC<MenuHighlightsShowcaseProps> = ({
  heading,
  text,
  imageSrc,
}) => {
  return (
    <Flex columnGap="2rem" zIndex="2">
      <Flex>
        <Box>
          <Image
            position="relative"
            alt="seared salmon fillet"
            src={imageSrc}
          />
        </Box>

        <Box maxWidth="100px" marginLeft="-3rem" paddingTop="1rem" zIndex="-1">
          <Image
            src="patterns/pattern-divide.svg"
            alt="divider image"
            width="100%"
          />
        </Box>
      </Flex>

      <Box maxWidth="350px" alignSelf="center">
        <Heading as="h3" fontSize="20px" lineHeight="24px">
          {heading}
        </Heading>
        <Text as="p">{text}</Text>
      </Box>
    </Flex>
  );
};

export default MenuHighlightsShowcase;
