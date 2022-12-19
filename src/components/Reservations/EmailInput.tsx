import { FormControl, FormErrorMessage, Input, Flex } from "@chakra-ui/react";
import { ReservationsInputProps } from "./types";

const EmailInput: React.FC<ReservationsInputProps> = ({ register, errors }) => {
  const emailIsInvalid = !!errors.email;
  const emailErrorMessage = errors.email?.message;

  return (
    <Flex alignItems="center">
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
    </Flex>
  );
};

export default EmailInput;
