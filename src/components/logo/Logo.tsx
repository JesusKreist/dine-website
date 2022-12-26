import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Box width="103px">
      <Link href="/">
        <Image src="/logo.svg" alt="logo"></Image>
      </Link>
    </Box>
  );
};

export default Logo;
