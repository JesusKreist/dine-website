import { Box, Flex, Text, Image, Button, FormControl } from "@chakra-ui/react";
import { useState } from "react";
import iconPlus from "public/icons/icon-plus.svg";
import iconMinus from "public/icons/icon-minus.svg";

interface GuestInputIconProps {
  icon: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const GuestInputIcon: React.FC<GuestInputIconProps> = ({
  icon,
  alt,
  onClick,
}) => (
  <Box width="40px" height="40px" as="button" type="button">
    <Flex
      alignItems="center"
      justifyContent="center"
      onClick={onClick}
      borderRadius="none"
      bgColor="transparent"
      width="100%"
      height="100%"
    >
      <Image width="10px" height="auto" src={icon} alt={alt}></Image>
    </Flex>
  </Box>
);

interface GuestsNumberPickerProps {
  guests: number;
  handleDecrement: React.MouseEventHandler<HTMLDivElement>;
  handleIncrement: React.MouseEventHandler<HTMLDivElement>;
}
const GuestsNumberPicker: React.FC<GuestsNumberPickerProps> = ({
  guests,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      borderBottomWidth="2px"
      height="100%"
    >
      <Flex
        paddingInline="1rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <GuestInputIcon
          alt="decrease value icon"
          icon="icons/icon-minus.svg"
          onClick={handleDecrement}
        />

        <Text fontWeight="bold">
          {guests} {guests > 1 ? "people" : "person"}
        </Text>

        <GuestInputIcon
          alt="increase value icon"
          icon="icons/icon-plus.svg"
          onClick={handleIncrement}
        />
      </Flex>
      {/* <Box borderBottomWidth="2px" height="32px"></Box> */}
    </Flex>
  );
};

export default GuestsNumberPicker;
