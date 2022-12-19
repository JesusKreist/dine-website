import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Logo from "../logo/Logo";

const IntroSection = () => {
  return (
    <Box
      bgImage={{
        md: `linear-gradient(to top, black, black 60%, rgba(158, 127, 102, 0.01) 30%), url(/homepage/hero-bg-tablet@2x.jpg)`,
        lg: `linear-gradient(to right, black, black 39%, rgba(158, 127, 102, 0.01) 39%), url(/homepage/hero-bg-desktop@2x.jpg)`,
      }}
      bgRepeat="no-repeat"
      paddingBottom="6rem"
      bgSize="contain"
      height={{ md: "992px", lg: "820px" }}
    >
      <Flex
        textAlign={{ md: "center", lg: "left" }}
        margin={{ md: "0 auto", lg: "unset" }}
        paddingTop={{ md: "25rem", lg: "4rem" }}
        paddingLeft={{ lg: "10rem" }}
        paddingBottom="6rem"
        color="white"
        direction="column"
        justifyContent={{ md: "center", lg: "unset" }}
        alignItems={{ md: "center", lg: "unset" }}
      >
        <Logo />
        <Heading
          width="50%"
          as="h2"
          fontSize={{ md: "48px", lg: "80px" }}
          fontWeight="light"
          lineHeight={{ md: "64px", lg: "80px" }}
          letterSpacing={{ md: "-0.6px", lg: "-1px" }}
          marginTop={{ md: "2rem", lg: "9rem" }}
          paddingBottom={{ md: "1.5rem", lg: "0.5rem" }}
        >
          Exquisite dining since 1989
        </Heading>
        <Text
          fontSize="xl"
          width={{ md: "75%", lg: "445px" }}
          paddingBottom="2rem"
        >
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </Text>
        <Button width="245px" variant="brandPrimaryOnDark">
          BOOK A TABLE
        </Button>
      </Flex>
    </Box>
  );
};

export default IntroSection;
