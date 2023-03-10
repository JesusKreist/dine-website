import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import LinkButton from "../../Navigation/LinkButton";

const ReservationBanner = () => {
  return (
    <Box
      height={{ base: "328px", md: "272px", xl: "240px" }}
      bgImage={{
        base: "/homepage/ready-bg-mobile@2x.jpg",
        md: "/homepage/ready-bg-tablet@2x.jpg",
        xl: "/homepage/ready-bg-desktop@2x.jpg",
      }}
      bgSize="cover"
      paddingLeft={{ "2xl": "10rem" }}
    >
      <Flex
        alignItems="center"
        height="100%"
        gap={{ base: "2rem", xl: "10rem", "2xl": "16rem" }}
        direction={{ base: "column", xl: "row" }}
        justifyContent={{ base: "center", "2xl": "flex-start" }}
      >
        <Heading
          fontWeight="bold"
          fontSize="48px"
          lineHeight="48px"
          color="white"
          width={{ base: "85%", md: "unset" }}
          textAlign={{ base: "center", xl: "left" }}
        >
          Ready to make a reservation?
        </Heading>
        <LinkButton variant="dark" />
      </Flex>
    </Box>
  );
};

export default ReservationBanner;
