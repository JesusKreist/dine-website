import { FormControl, Flex, Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const AmOrPmSelectBox = () => {
  const [isAM, setIsAM] = useState(true);
  const [isPopoverOpen, setisPopoverOpen] = useState(false);
  const [checkmarkTopPosition, setCheckmarkTopPosition] = useState("25px");

  useEffect(() => {
    if (isAM) {
      setCheckmarkTopPosition("25px");
    } else {
      setCheckmarkTopPosition("60px");
    }
  }, [isAM]);

  const togglePopover = () => {
    setisPopoverOpen(!isPopoverOpen);
  };

  return (
    <FormControl width="97px" position="relative" borderBottomWidth="2px">
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Text width="35px">{isAM ? "AM" : "PM"}</Text>
        <Box as="button" type="button" width="16px" onClick={togglePopover}>
          <Image
            src="icons/icon-arrow.svg"
            alt="arrow icon"
            transform={isPopoverOpen ? "scaleY(-1)" : "unset"}
          />
        </Box>

        {isPopoverOpen && (
          <Flex
            width="106px"
            height="103px"
            boxShadow="2xl"
            position="absolute"
            bottom="-100"
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="0.5rem"
            bgColor="white"
            zIndex={1}
          >
            <Text
              as="button"
              type="button"
              onClick={() => {
                setIsAM(true);
              }}
            >
              AM
            </Text>
            <Text
              as="button"
              type="button"
              onClick={() => {
                setIsAM(false);
              }}
            >
              PM
            </Text>
            <Box
              width="16px"
              position="absolute"
              top={checkmarkTopPosition}
              left="15px"
            >
              <Image src="icons/icon-check.svg" alt="arrow icon" />
            </Box>
          </Flex>
        )}
      </Flex>
    </FormControl>
  );
};

export default AmOrPmSelectBox;
