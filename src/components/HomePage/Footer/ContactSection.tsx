import { Flex, Heading, Button, Box, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../logo/Logo";

const ContactSection = () => {
  return (
    <Box height="240px" bgColor="black" paddingLeft="10rem" color="white">
      <Flex
        alignItems="center"
        height="100%"
        columnGap="12rem"
        fontSize="17px"
        letterSpacing=".25ch"
      >
        <Logo />
        <Box width="244px" height="84px">
          <Text>MARTHWAITE, SEDBERGH</Text>
          <Text>CUMBRIA</Text>
          <Text>+00 44 123 4567</Text>
        </Box>
        <Box width="446px" height="84px">
          <Text>OPEN TIMES</Text>
          <Text>MON - FRI: 09:00 AM - 10:00 PM</Text>
          <Text>SAT - SUN: 09:00 AM - 11:30 PM</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactSection;
