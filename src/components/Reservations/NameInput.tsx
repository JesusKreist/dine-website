import {
  FormControl,
  FormErrorMessage,
  Input,
  Flex,
  Box,
} from "@chakra-ui/react";
import { ReservationsInputProps } from "./types";

const NameInput: React.FC<ReservationsInputProps> = ({ register, errors }) => {
  const nameIsInvalid = !!errors.name;
  const nameErrorMessage = errors.name?.message;
  return (
    <Flex justifyContent={nameIsInvalid ? "center" : "end"} direction="column">
      <FormControl isInvalid={nameIsInvalid}>
        <Input
          type="text"
          id="name"
          autoComplete="name"
          placeholder="Name"
          variant="flushed"
          borderBottomWidth="2px"
          size="lg"
          paddingLeft="1rem"
          {...register("name")}
        />
        {nameIsInvalid && (
          <FormErrorMessage paddingLeft="1rem">
            {nameErrorMessage}
          </FormErrorMessage>
        )}
      </FormControl>
    </Flex>
  );
};

export default NameInput;
