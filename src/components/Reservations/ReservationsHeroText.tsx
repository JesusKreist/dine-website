import { Heading, Text, Box, Button } from "@chakra-ui/react";

const ReservationsHeroText = () => {
  return (
    <Box
      width={{ base: "85vw", md: "573px", lg: "445px" }}
      color="white"
      textAlign={{ base: "center", lg: "left" }}
      margin="0 auto"
    >
      <Heading
        as="h2"
        fontSize={{ base: "42px", md: "48px", lg: "80px" }}
        fontWeight="light"
        lineHeight={{ md: "64px", lg: "80px" }}
        letterSpacing={{ md: "-0.6px", lg: "unset" }}
        marginTop={{ lg: "9rem" }}
        margin={{ base: "0 auto", lg: "unset" }}
        paddingBottom={{ base: "0.5rem", md: "1rem", lg: "0.5rem" }}
      >
        Reservations
      </Heading>
      <Text
        fontSize="xl"
        paddingBottom={{ base: "2rem", md: "unset", lg: "2rem" }}
      >
        We can&apos;t wait to host you. If you have any special requirements
        please feel free to call on the phone number below. We&apos;ll be happy
        to accommodate you.
      </Text>
      <Button
        width="245px"
        height="64px"
        variant="brandPrimaryOnDark"
        marginBottom={{ base: "6rem", md: "unset" }}
      >
        RESERVE PLACE
      </Button>
    </Box>
  );
};

export default ReservationsHeroText;
