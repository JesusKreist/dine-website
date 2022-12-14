import { Flex, Grid, Button, Box, Image } from "@chakra-ui/react";
import DatePicker from "./DatePicker";
import EmailInput from "./EmailInput";
import GuestsNumberPicker from "./GuestsNumberPicker";
import NameInput from "./NameInput";
import TimePicker from "./TimePicker";

const ReservationsForm = () => {
  return (
    <Flex
      className="reservations-form"
      width="540px"
      height="545px"
      bgColor="white"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Grid
        gridTemplateRows="repeat(6, 1fr)"
        as="form"
        width="80%"
        height="80%"
        fontSize="lg"
        gap="2rem"
      >
        <NameInput />
        <EmailInput />
        <DatePicker />
        <TimePicker />
        <GuestsNumberPicker />
        <Button variant="brandPrimaryOnLight">MAKE RESERVATION</Button>
      </Grid>
      <Box position="absolute" top="500px" left="-80px">
        <Image src="patterns/pattern-lines.svg" alt="lines pattern" />
      </Box>
    </Flex>
  );
};

export default ReservationsForm;
