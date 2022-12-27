import { Heading, Text, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ReservationsFormProps } from "./ReservationsForm";

interface ReservationsHeroTextProps {
  setFormFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReservationsHeroText: React.FC<ReservationsHeroTextProps> = ({
  setFormFocus,
}) => {
  const animate = () => {
    // Button begins to shake
    setFormFocus(true);

    // Buttons stops to shake after 2 seconds
    setTimeout(() => setFormFocus(false), 2000);
  };

  return (
    <Box
      width={{ base: "85vw", md: "573px", "2xl": "445px" }}
      color="white"
      textAlign={{ base: "center", "2xl": "left" }}
      margin={{ base: "0 auto", "2xl": "unset" }}
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
        display={{ base: "inline-flex", "2xl": "none" }}
        onClick={animate}
      >
        RESERVE PLACE
      </Button>
    </Box>
  );
};

export default ReservationsHeroText;
