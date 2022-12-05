import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ReservationBanner = () => {
  return (
    <Box
      height="240px"
      bgImage="/homepage/ready-bg-desktop@2x.jpg"
      bgSize="contain"
      paddingLeft="10rem"
    >
      <Flex alignItems="center" height="100%" columnGap="16rem">
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
