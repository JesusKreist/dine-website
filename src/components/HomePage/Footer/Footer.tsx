import { Flex, Heading, Button, Box, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../logo/Logo";

const Footer = () => {
  return (
    <Box
      display={{ md: "flex", lg: "block" }}
      height={{ md: "328px", lg: "240px" }}
      bgColor="black"
      paddingLeft={{ lg: "10rem" }}
      color="white"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        alignItems="center"
        height="200px"
        gap={{ md: "9rem", lg: "12rem" }}
        fontSize={{ md: "14px", lg: "17px" }}
        lineHeight={{ md: "28px", lg: "28px" }}
        letterSpacing="2px"
      >
        <Box alignSelf={{ md: "start", lg: "unset" }}>
          <Logo />
        </Box>

        <Flex
          gap={{ lg: "12rem" }}
          width={{ md: "456px", lg: "unset" }}
          height={{ md: "200px", lg: "unset" }}
          direction={{ md: "column", lg: "row" }}
          justifyContent={{ md: "space-between", lg: "unset" }}
        >
          <Box width={{ md: "100%", lg: "244px" }} height="84px">
            <Text>MARTHWAITE, SEDBERGH</Text>
            <Text>CUMBRIA</Text>
            <Text>+00 44 123 4567</Text>
          </Box>
          <Box width={{ md: "100%", lg: "446px" }} height="84px">
            <Text>OPEN TIMES</Text>
            <Text>MON - FRI: 09:00 AM - 10:00 PM</Text>
            <Text>SAT - SUN: 09:00 AM - 11:30 PM</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
