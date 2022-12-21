import { Heading, Text, Box } from "@chakra-ui/react";

const ReservationsHeroText = () => {
  return (
    <Box
      width={{ md: "573px", lg: "445px" }}
      color="white"
      textAlign={{ md: "center", lg: "left" }}
    >
      <Heading
        as="h2"
        fontSize={{ md: "48px", lg: "80px" }}
        fontWeight="light"
        lineHeight={{ md: "64px", lg: "80px" }}
        letterSpacing={{ md: "-0.6px", lg: "unset" }}
        marginTop={{ lg: "9rem" }}
        margin={{ md: "0 auto", lg: "unset" }}
        paddingBottom={{ md: "1rem", lg: "0.5rem" }}
      >
        Reservations
      </Heading>
      <Text fontSize="xl" paddingBottom={{ lg: "2rem" }}>
        We can&apos;t wait to host you. If you have any special requirements
        please feel free to call on the phone number below. We&apos;ll be happy
        to accommodate you.
      </Text>
    </Box>
  );
};

export default ReservationsHeroText;
