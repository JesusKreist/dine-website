import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export interface LinkButtonProps {
  variant: "light" | "dark";
}

const LinkButton: React.FC<LinkButtonProps> = ({ variant }) => {
  return (
    <Link href="/reservations">
      <Button
        width="245px"
        height="64px"
        variant={
          variant === "light" ? "brandPrimaryOnLight" : "brandPrimaryOnDark"
        }
      >
        BOOK A TABLE
      </Button>
    </Link>
  );
};

export default LinkButton;
