import {
  Flex,
  FormControl,
  Input,
  Text,
  Select,
  Box,
  FormErrorMessage,
  Image,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AmOrPmSelectBox from "./AmOrPmSelectBox";
import { ReservationsInputProps } from "../types";

const TimePicker: React.FC<ReservationsInputProps> = ({ register, errors }) => {
  const [isTimeIncomplete, setIsTimeIncomplete] = useState(false);
  const [errorMessages, setErrorMessages] = useState([
    "This field is incomplete",
  ]);

  const hourIsInvalid = !!errors.hour;
  const minuteIsInvalid = !!errors.minute;

  // set isTimeIncomplete to true if any of the time inputs are invalid
  useEffect(() => {
    const timeInputHasError = [hourIsInvalid, minuteIsInvalid].includes(true);

    setIsTimeIncomplete(timeInputHasError);
  }, [, errors, hourIsInvalid, minuteIsInvalid]);

  useEffect(() => {
    const errorMessages = [];
    if (hourIsInvalid) {
      errorMessages.push("Hour is invalid");
    }
    if (minuteIsInvalid) {
      errorMessages.push("Minute is invalid");
    }
    setErrorMessages(errorMessages);
  }, [hourIsInvalid, minuteIsInvalid]);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: "0.5rem", md: "unset" }}
      direction={{ base: "column", md: "row" }}
      width={{ base: "100%", md: "unset" }}
    >
      <Box alignSelf={{ base: "start", md: "unset" }}>
        <FormControl isInvalid={isTimeIncomplete}>
          <Text
            fontSize="lg"
            marginTop={
              isTimeIncomplete
                ? { base: "0.5rem", md: "1rem" }
                : { base: "0.5rem", md: "unset" }
            }
            lineHeight="initial"
            color={isTimeIncomplete ? "red" : "unset"}
          >
            Pick a time
          </Text>
          {isTimeIncomplete && (
            <FormErrorMessage
              fontSize="small"
              display={{ base: "none", md: "block" }}
            >
              {errorMessages[0]}
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>

      <Flex columnGap="15px">
        <FormControl
          width={{ base: "75px", "2xl": "80px" }}
          isInvalid={hourIsInvalid}
        >
          <Input
            type="text"
            placeholder="09"
            id="time-hours"
            size="lg"
            variant="flushed"
            paddingLeft="1rem"
            borderBottomWidth="2px"
            color={hourIsInvalid ? "red" : "unset"}
            {...register("hour")}
          />
        </FormControl>

        <FormControl
          width={{ base: "75px", "2xl": "80px" }}
          isInvalid={minuteIsInvalid}
        >
          <Input
            type="text"
            placeholder="00"
            id="time-minutes"
            size="lg"
            variant="flushed"
            paddingLeft="1rem"
            borderBottomWidth="2px"
            color={minuteIsInvalid ? "red" : "unset"}
            {...register("minute")}
          />
        </FormControl>

        <AmOrPmSelectBox />
      </Flex>
    </Flex>
  );
};

export default TimePicker;
