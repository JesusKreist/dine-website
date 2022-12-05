import { Box, Button, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import Logo from "../logo/Logo";

const IntroSection = () => {
  return (
    <Box
      bgImage={`linear-gradient(to right, black, black 39%, rgba(158, 127, 102, 0.01) 39%), url(/homepage/hero-bg-desktop@2x.jpg)`}
      bgRepeat="no-repeat"
      paddingBottom="6rem"
      bgSize="contain"
      height="820px"
    >
      <Box
        paddingTop="4rem"
        paddingLeft="10rem"
        paddingBottom="6rem"
        width="50%"
        color="white"
      >
        <Logo />
        <Heading
          as="h2"
          fontSize={"80px"}
          fontWeight="light"
          lineHeight={"80px"}
          marginTop="9rem"
          paddingBottom="0.5rem"
        >
          Exquisite dining since 1989
        </Heading>
        <Text fontSize="xl" width="70%" paddingBottom="2rem">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </Text>
        <Button variant="brandPrimaryOnDark">BOOK A TABLE</Button>
      </Box>
    </Box>
  );
};

export default IntroSection;
