import { Box } from "@chakra-ui/react";
import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Box
      width={{ base: "100vw", md: "768px", lg: "90%", "2xl": "1440px" }}
      margin="auto"
      overflow="hidden"
      border={{
        base: "2px solid green",
        md: "2px solid orange",
        lg: "2px solid blue",
        xl: "2px solid red",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
