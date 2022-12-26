import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../logo/Logo";

const Footer = () => {
  return (
    <Box
      display={{ base: "flex", xl: "block" }}
      paddingBlock="5rem"
      bgColor="black"
      paddingLeft={{ xl: "10rem" }}
      color="white"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        gap={{ base: "5rem", md: "9rem", xl: "12rem" }}
        fontSize={{ md: "14px", xl: "17px" }}
        lineHeight={{ md: "28px", xl: "28px" }}
        letterSpacing="2px"
      >
        <Box alignSelf={{ md: "start", xl: "unset" }}>
          <Logo />
        </Box>

        <Flex
          gap={{ base: "5rem", md: "unset", xl: "12rem" }}
          width={{ md: "456px", xl: "unset" }}
          height={{ md: "200px", xl: "unset" }}
          direction={{ base: "column", xl: "row" }}
          alignItems={{ base: "center", md: "unset" }}
          textAlign={{ base: "center", md: "left" }}
          justifyContent={{ md: "space-between", xl: "unset" }}
        >
          <Box width={{ md: "100%", xl: "244px" }} height={{ md: "84px" }}>
            <Text lineHeight="28px">MARTHWAITE, SEDBERGH</Text>
            <Text lineHeight="28px">CUMBRIA</Text>
            <Text lineHeight="28px">+00 44 123 4567</Text>
          </Box>
          <Box width={{ md: "100%", xl: "446px" }} height={{ md: "84px" }}>
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
