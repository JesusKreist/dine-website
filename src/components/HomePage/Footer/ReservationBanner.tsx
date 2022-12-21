import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ReservationBanner = () => {
  return (
    <Box
      height={{ md: "272px", lg: "240px" }}
      bgImage={{
        md: "/homepage/ready-bg-tablet@2x.jpg",
        lg: "/homepage/ready-bg-desktop@2x.jpg",
      }}
      bgSize="contain"
      paddingLeft={{ lg: "10rem" }}
    >
      <Flex
        alignItems="center"
        height="100%"
        gap={{ md: "2rem", lg: "16rem" }}
        direction={{ md: "column", lg: "row" }}
        justifyContent={{ md: "center", lg: "flex-start" }}
      >
        <Heading
          fontWeight="bold"
          fontSize="48px"
          lineHeight="48px"
          color="white"
        >
          Ready to make a reservation?
        </Heading>
        <Button variant="brandPrimaryOnDark">BOOK A TABLE</Button>
      </Flex>
    </Box>
  );
};

export default ReservationBanner;
