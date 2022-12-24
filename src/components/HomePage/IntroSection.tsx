import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import Logo from "../logo/Logo";
import LinkButton from "../Navigation/LinkButton";

//

const IntroSection = () => {
  return (
    <Box
      bgImage={{
        base: `linear-gradient(to top, black, black 72%, rgba(158, 127, 102, 0.01) 30%), url(/homepage/hero-bg-mobile@2x.jpg)`,
        md: `linear-gradient(to top, black, black 60%, rgba(158, 127, 102, 0.01) 30%), url(/homepage/hero-bg-tablet@2x.jpg)`,
        lg: `linear-gradient(to right, black, black 39%, rgba(158, 127, 102, 0.01) 39%), url(/homepage/hero-bg-desktop@2x.jpg)`,
      }}
      bgRepeat="no-repeat"
      paddingBottom="6rem"
      bgSize="cover"
      bgPosition="center"
      height={{ md: "992px", lg: "820px" }}
    >
      <Flex
        textAlign={{ base: "center", lg: "left" }}
        margin={{ base: "0 auto", lg: "unset" }}
        paddingTop={{ base: "16rem", md: "25rem", lg: "4rem" }}
        paddingLeft={{ lg: "10rem" }}
        paddingBottom="6rem"
        color="white"
        direction="column"
        justifyContent={{ base: "center", lg: "unset" }}
        alignItems={{ base: "center", lg: "unset" }}
      >
        <Logo />
        <Heading
          width={{ base: "250px", sm: "unset" }}
          as="h2"
          fontSize={{ base: "32px", md: "48px", lg: "80px" }}
          fontWeight="light"
          lineHeight={{ md: "64px", lg: "80px" }}
          letterSpacing={{ md: "-0.6px", lg: "-1px" }}
          marginTop={{ base: "2rem", md: "2rem", lg: "9rem" }}
          paddingBottom={{ base: "2rem", md: "1.5rem", lg: "0.5rem" }}
        >
          Exquisite dining since 1989
        </Heading>
        <Text
          fontSize={{ base: "18px", md: "xl" }}
          width={{ base: "85%", md: "75%", lg: "445px" }}
          paddingBottom={{ base: "3.5rem", sm: "2rem" }}
        >
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </Text>
        <LinkButton variant="dark" />
      </Flex>
    </Box>
  );
};

export default IntroSection;
