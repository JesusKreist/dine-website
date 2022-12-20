import { Box, Heading, Text, Image, HStack, Flex } from "@chakra-ui/react";

interface RestaurantShowcaseTextProps {
  heading: string;
  text: string;
  withLeftPadding?: boolean;
  withDivider?: boolean;
}

const RestaurantShowcaseText: React.FC<RestaurantShowcaseTextProps> = ({
  heading,
  text,
  withLeftPadding = false,
  withDivider = false,
}) => {
  return (
    <Flex
      margin={{ md: "0 auto", lg: "unset" }}
      placeContent="center"
      flexDirection="column"
      maxWidth="445px"
      rowGap={{ md: "1rem", lg: "2rem" }}
      paddingLeft={{ lg: withLeftPadding ? "2rem" : "0" }}
      textAlign={{ md: "center", lg: "unset" }}
      align={{ md: "center", lg: "unset" }}
    >
      {withDivider && (
        <Box maxWidth="100px" paddingTop="1rem" paddingBottom="1rem">
          <Image
            src="patterns/pattern-divide.svg"
            alt="divider image"
            width="100%"
          />
        </Box>
      )}
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
    </Flex>
  );
};

export default RestaurantShowcaseText;
