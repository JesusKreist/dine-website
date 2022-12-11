import { Flex, FormControl, Input, Text } from "@chakra-ui/react";
import React from "react";

const DatePicker = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="lg">Pick a date</Text>
      <Flex columnGap="15px">
        <FormControl width="80px">
          <Input
            type="text"
            autoComplete="month"
            placeholder="MM"
            id="month"
            variant="flushed"
            borderBottomWidth="2px"
            size="lg"
            paddingLeft="1rem"
          />
        </FormControl>
        <FormControl width="80px">
          <Input
            type="text"
            autoComplete="day"
            placeholder="DD"
            id="day"
            variant="flushed"
            borderBottomWidth="2px"
            size="lg"
            paddingLeft="1rem"
          />
        </FormControl>
        <FormControl width="97px">
          <Input
            type="text"
            autoComplete="year"
            placeholder="YYYY"
            id="year"
            variant="flushed"
            borderBottomWidth="2px"
            size="lg"
            paddingLeft="1rem"
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default DatePicker;
