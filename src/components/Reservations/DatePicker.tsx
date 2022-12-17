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

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box>
        <FormControl isInvalid={isDateIncomplete}>
          <Text
            fontSize="lg"
            paddingTop={isDateIncomplete ? "1rem" : "unset"}
            lineHeight="initial"
            color={isDateIncomplete ? "red" : "unset"}
          >
            Pick a date
          </Text>
          {isDateIncomplete && (
            <FormErrorMessage fontSize="small">
              This field is incomplete
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>

      <Flex columnGap="15px">
        <FormControl width="80px" isInvalid={monthIsInvalid}>
          <Input
            type="text"
            autoComplete="month"
            placeholder="MM"
            id="month"
            variant="flushed"
            borderBottomWidth="2px"
            size="lg"
            paddingLeft="1rem"
            color={monthIsInvalid ? "red" : "unset"}
            {...register("month")}
          />
        </FormControl>

        <FormControl width="80px" isInvalid={dayIsInvalid}>
          <Input
            type="text"
            autoComplete="day"
            placeholder="DD"
            id="day"
            variant="flushed"
            borderBottomWidth="2px"
            size="lg"
            paddingLeft="1rem"
            color={dayIsInvalid ? "red" : "unset"}
            {...register("day")}
          />
        </FormControl>

        <FormControl width="97px" isInvalid={yearIsInvalid}>
          <Input
            type="text"
            placeholder="YYYY"
            id="year_date"
            variant="flushed"
            borderBottomWidth="2px"
            size="lg"
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
