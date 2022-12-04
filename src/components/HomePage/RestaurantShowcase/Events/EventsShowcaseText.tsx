import { Box, Heading, Text, Image, HStack } from "@chakra-ui/react";

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
    <Box
      display="flex"
      placeContent="center"
      flexDirection="column"
      maxWidth="445px"
      rowGap="1rem"
      paddingLeft={withLeftPadding ? "2rem" : "0"}
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
    </Box>
  );
};

export default EventShowcaseText;
