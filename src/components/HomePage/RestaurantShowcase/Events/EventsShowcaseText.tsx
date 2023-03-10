import { Box, Heading, Text, Image, HStack, Flex } from "@chakra-ui/react";

interface EventShowcaseTextProps {
  heading: string;
  text: string;
  withLeftPadding?: boolean;
  withDivider?: boolean;
}

const EventShowcaseText: React.FC<EventShowcaseTextProps> = ({
  heading,
  text,
  withLeftPadding = false,
  withDivider = false,
}) => {
  return (
    <Flex
      margin={{ base: "0 auto", lg: "unset" }}
      placeContent="center"
      flexDirection="column"
      maxWidth={{ base: "327px", md: "445px" }}
      rowGap={{ base: "2rem", md: "1rem", lg: "2rem" }}
      paddingLeft={{ lg: withLeftPadding ? "2rem" : "0" }}
      textAlign={{ base: "center", lg: "left" }}
      align={{ base: "center", lg: "unset" }}
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
        fontSize={{ base: "42px", md: "48px" }}
        lineHeight={{ base: "40px", md: "48px" }}
        letterSpacing={{ base: "-0.4px", md: "unset" }}
        maxWidth={{ base: "327px", md: "400px" }}
      >
        {heading}
      </Heading>
      <Text
        fontWeight="regular"
        fontSize={{ base: "18px", md: "20px" }}
        lineHeight="30px"
      >
        {text}
      </Text>
    </Flex>
  );
};

export default EventShowcaseText;
