import { Button } from "@chakra-ui/react";
import React from "react";

export interface LinkButtonProps {
  variant: "light" | "dark";
}

const LinkButton: React.FC<LinkButtonProps> = ({ variant }) => {
  return (
    <Button
      width="245px"
      height="64px"
      variant={
        variant === "light" ? "brandPrimaryOnLight" : "brandPrimaryOnDark"
      }
    >
      BOOK A TABLE
    </Button>
  );
};

export default LinkButton;
