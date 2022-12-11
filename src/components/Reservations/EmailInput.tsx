import { FormControl, Input } from "@chakra-ui/react";

const EmailInput = () => {
  return (
    <FormControl>
      <Input
        type="email"
        autoComplete="email"
        placeholder="Email"
        id="email"
        variant="flushed"
        borderBottomWidth="2px"
        size="lg"
      />
    </FormControl>
  );
};

export default EmailInput;
