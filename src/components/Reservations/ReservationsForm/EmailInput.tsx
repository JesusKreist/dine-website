import {
  FormControl,
  FormErrorMessage,
  Input,
  Flex,
  Box,
} from "@chakra-ui/react";
import { ReservationsInputProps } from "../types";

const EmailInput: React.FC<ReservationsInputProps> = ({ register, errors }) => {
  const emailIsInvalid = !!errors.email;
  const emailErrorMessage = errors.email?.message;

  return (
    <Flex justifyContent={emailIsInvalid ? "center" : "end"} direction="column">
      <FormControl isInvalid={emailIsInvalid}>
        <Input
          type="email"
          autoComplete="email"
          placeholder="Email"
          id="email"
          variant="flushed"
          borderBottomWidth="2px"
          size="lg"
          paddingLeft="1rem"
          {...register("email")}
        />
        {emailIsInvalid && (
          <FormErrorMessage paddingLeft="1rem">
            {emailErrorMessage}
          </FormErrorMessage>
        )}
      </FormControl>
      {!emailIsInvalid && <Box height="0.5rem"></Box>}
    </Flex>
  );
};

export default EmailInput;
