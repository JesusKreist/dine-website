import { Flex, Heading, Button, Box, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../logo/Logo";

const Footer = () => {
  return (
    <Box
      display={{ base: "flex", lg: "block" }}
      paddingBlock="5rem"
      bgColor="black"
      paddingLeft={{ lg: "10rem" }}
      color="white"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        gap={{ base: "5rem", md: "9rem", lg: "12rem" }}
        fontSize={{ md: "14px", lg: "17px" }}
        lineHeight={{ md: "28px", lg: "28px" }}
        letterSpacing="2px"
      >
        <Box alignSelf={{ md: "start", lg: "unset" }}>
          <Logo />
        </Box>

        <Flex
          gap={{ base: "5rem", md: "unset", lg: "12rem" }}
          width={{ md: "456px", lg: "unset" }}
          height={{ md: "200px", lg: "unset" }}
          direction={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", md: "unset" }}
          textAlign={{ base: "center", md: "left" }}
          justifyContent={{ md: "space-between", lg: "unset" }}
        >
          <Box width={{ md: "100%", lg: "244px" }} height={{ md: "84px" }}>
            <Text lineHeight="28px">MARTHWAITE, SEDBERGH</Text>
            <Text lineHeight="28px">CUMBRIA</Text>
            <Text lineHeight="28px">+00 44 123 4567</Text>
          </Box>
          <Box width={{ md: "100%", lg: "446px" }} height={{ md: "84px" }}>
            <Text lineHeight="28px">OPEN TIMES</Text>
            <Text lineHeight="28px">MON - FRI: 09:00 AM - 10:00 PM</Text>
            <Text lineHeight="28px">SAT - SUN: 09:00 AM - 11:30 PM</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
