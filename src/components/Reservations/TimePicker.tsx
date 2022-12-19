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
import AmOrPmSelectBox from "./ReservationsForm/AmOrPmSelectBox";
import { ReservationsInputProps } from "./types";

const TimePicker: React.FC<ReservationsInputProps> = ({ register, errors }) => {
  const [isTimeIncomplete, setIsTimeIncomplete] = useState(false);

  const hourIsInvalid = !!errors.hour;
  const minuteIsInvalid = !!errors.minute;
  // const amOrPmIsInvalid = !!errors.amOrPm;

  // set isTimeIncomplete to true if any of the time inputs are invalid
  useEffect(() => {
    const timeInputHasError = [
      hourIsInvalid,
      minuteIsInvalid,
      // amOrPmIsInvalid,
    ].includes(true);

    setIsTimeIncomplete(timeInputHasError);
  }, [, errors, hourIsInvalid, minuteIsInvalid]);

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box>
        <FormControl isInvalid={isTimeIncomplete}>
          <Text
            fontSize="lg"
            paddingTop={isTimeIncomplete ? "1rem" : "unset"}
            lineHeight="initial"
            color={isTimeIncomplete ? "red" : "unset"}
          >
            Pick a time
          </Text>
          {isTimeIncomplete && (
            <FormErrorMessage fontSize="small">
              This field is incomplete
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>

      <Flex columnGap="15px">
        <FormControl width="80px" isInvalid={hourIsInvalid}>
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

        <FormControl width="80px" isInvalid={minuteIsInvalid}>
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
