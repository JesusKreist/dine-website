import { FormControl, Input } from "@chakra-ui/react";

const NameInput = () => {
  return (
    <FormControl>
      <Input
        type="text"
        id="name"
        autoComplete="name"
        placeholder="Name"
        variant="flushed"
        borderBottomWidth="2px"
        size="lg"
      />
    </FormControl>
  );
};

export default NameInput;
