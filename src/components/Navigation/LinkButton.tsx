import { Button } from "@chakra-ui/react";
import React from "react";

export interface LinkButtonProps {
  variant: "light" | "dark";
}

const LinkButton: React.FC<LinkButtonProps> = ({ variant }) => {
  //   let button;
  //   if (buttonColorVariant === "light") {
  //     button = <Button variant="brandPrimaryOnLight">BOOK A TABLE</Button>;
  //   } else if (buttonColorVariant === "dark") {
  //     button = <Button variant="brandPrimaryOnDark">BOOK A TABLE</Button>;
  //   }

  return (
    <>
      {variant === "light" ? (
        <Button width="245px" height="64px" variant="brandPrimaryOnLight">
          BOOK A TABLE
        </Button>
      ) : (
        <Button width="245px" height="64px" variant="brandPrimaryOnDark">
          BOOK A TABLE
        </Button>
      )}
    </>
  );
};

export default LinkButton;
