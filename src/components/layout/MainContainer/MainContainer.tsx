import { Box } from "@chakra-ui/react";
import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Box width={"1440px"} margin="auto">
      {children}
    </Box>
  );
};

export default MainContainer;
