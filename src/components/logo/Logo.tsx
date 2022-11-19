import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Box width="90px">
      <Image src="/logo.svg" alt="logo"></Image>
    </Box>
  );
};

export default Logo;
