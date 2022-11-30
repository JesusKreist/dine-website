import { Box, Heading, Text, Image, HStack } from "@chakra-ui/react";

interface RestaurantShowcaseTextProps {
  heading: string;
  text: string;
  withLeftPadding?: boolean;
}

const RestaurantShowcaseText: React.FC<RestaurantShowcaseTextProps> = ({
  heading,
  text,
  withLeftPadding = false,
}) => {
  return (
    <Box
      display="flex"
      placeContent="center"
      flexDirection="column"
      maxWidth="445px"
      rowGap="3rem"
      paddingLeft={withLeftPadding ? "2rem" : "0"}
    >
      <Box maxWidth="100px">
        <Image
          src="patterns/pattern-divide.svg"
          alt="divider image"
          width="100%"
        />
      </Box>
      <Heading
        fontWeight="bold"
        fontSize="48px"
        lineHeight="48px"
        maxWidth="400px"
      >
        {heading}
      </Heading>
      <Text fontWeight="normal" fontSize="20px" lineHeight="30px">
        {text}
      </Text>
    </Box>
  );
};

export default RestaurantShowcaseText;
