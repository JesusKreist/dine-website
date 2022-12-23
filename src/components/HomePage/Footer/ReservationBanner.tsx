import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ReservationBanner = () => {
  return (
    <Box
      height={{ base: "328px", md: "272px", lg: "240px" }}
      bgImage={{
        base: "/homepage/ready-bg-mobile@2x.jpg",
        md: "/homepage/ready-bg-tablet@2x.jpg",
        lg: "/homepage/ready-bg-desktop@2x.jpg",
      }}
      bgSize="cover"
      paddingLeft={{ lg: "10rem" }}
    >
      <Flex
        alignItems="center"
        height="100%"
        gap={{ base: "2rem", lg: "16rem" }}
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
      >
        <Heading
          fontWeight="bold"
          fontSize="48px"
          lineHeight="48px"
          color="white"
          width={{ base: "85%", md: "unset" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          Ready to make a reservation?
        </Heading>
        <Button variant="brandPrimaryOnDark">BOOK A TABLE</Button>
      </Flex>
    </Box>
  );
};

export default ReservationBanner;
