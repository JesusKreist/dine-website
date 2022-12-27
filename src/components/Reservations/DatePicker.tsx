import {
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ReservationsInputProps } from "./types";

const DatePicker: React.FC<ReservationsInputProps> = ({ register, errors }) => {
  const [isDateIncomplete, setIsDateIncomplete] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const yearIsInvalid = !!errors.yearOfReservation;
  const monthIsInvalid = !!errors.month;
  const dayIsInvalid = !!errors.day;

  // set isDateIncomplete to true if any of the date inputs are invalid
  useEffect(() => {
    const dateInputHasError = [
      yearIsInvalid,
      monthIsInvalid,
      dayIsInvalid,
    ].includes(true);

    setIsDateIncomplete(dateInputHasError);
  }, [dayIsInvalid, errors, isDateIncomplete, monthIsInvalid, yearIsInvalid]);

  useEffect(() => {
    const errorMessages = [];
    if (yearIsInvalid) {
      errorMessages.push("Year is invalid");
    }
    if (monthIsInvalid) {
      errorMessages.push("Month is invalid");
    }
    if (dayIsInvalid) {
      errorMessages.push("Day is invalid");
    }
    setErrorMessages(errorMessages);
  }, [dayIsInvalid, monthIsInvalid, yearIsInvalid]);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: "0.5rem", md: "unset" }}
      direction={{ base: "column", md: "row" }}
      width={{ base: "100%", md: "unset" }}
    >
      <Box alignSelf={{ base: "start", md: "unset" }}>
        <FormControl isInvalid={isDateIncomplete}>
          <Text
            fontSize="lg"
            paddingTop={
              isDateIncomplete ? { base: "0.5rem", md: "1rem" } : "unset"
            }
            lineHeight="initial"
            color={isDateIncomplete ? "red" : "unset"}
          >
            Pick a date
          </Text>
          {isDateIncomplete && (
            <FormErrorMessage
              fontSize="small"
              display={{ base: "none", md: "block" }}
            >
              {errorMessages[0] ? errorMessages[0] : "This field is incomplete"}
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>

      <Flex columnGap="15px">
        <FormControl
          width={{ base: "75px", "2xl": "80px" }}
          isInvalid={monthIsInvalid}
        >
          <Input
            type="text"
            autoComplete="month"
            placeholder="MM"
            id="month"
            size="lg"
            variant="flushed"
            borderBottomWidth="2px"
            paddingLeft="1rem"
            color={monthIsInvalid ? "red" : "unset"}
            {...register("month")}
          />
        </FormControl>

        <FormControl
          width={{ base: "75px", "2xl": "80px" }}
          isInvalid={dayIsInvalid}
        >
          <Input
            type="text"
            autoComplete="day"
            placeholder="DD"
            id="day"
            size="lg"
            variant="flushed"
            borderBottomWidth="2px"
            paddingLeft="1rem"
            color={dayIsInvalid ? "red" : "unset"}
            {...register("day")}
          />
        </FormControl>

        <FormControl
          width={{ base: "85px", lg: "97px" }}
          isInvalid={yearIsInvalid}
        >
          <Input
            type="text"
            placeholder="YYYY"
            id="year_date"
            size="lg"
            variant="flushed"
            borderBottomWidth="2px"
            paddingLeft="1rem"
            color={yearIsInvalid ? "red" : "unset"}
            {...register("yearOfReservation")}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default DatePicker;
