import { Flex, FormControl, Input, Text, Select } from "@chakra-ui/react";
import React from "react";
import { ReservationsInputProps } from "./types";

const TimePicker: React.FC<ReservationsInputProps> = ({ register }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="lg">Pick a time</Text>
      <Flex columnGap="15px">
        <FormControl width="80px" borderBottomWidth="2px">
          <Input
            type="text"
            placeholder="09"
            id="time-hours"
            border="none"
            size="lg"
            paddingLeft="1rem"
            {...register("hour")}
          />
        </FormControl>
        <FormControl width="80px" borderBottomWidth="2px">
          <Input
            type="text"
            placeholder="00"
            id="time-minutes"
            border="none"
            size="lg"
            paddingLeft="1rem"
            {...register("minutes")}
          />
        </FormControl>
        <FormControl width="97px" borderBottomWidth="2px">
          <Select
            id="year"
            variant="flushed"
            border="none"
            size="lg"
            defaultValue="AM"
            paddingLeft="1rem"
            {...register("year")}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </Select>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default TimePicker;
