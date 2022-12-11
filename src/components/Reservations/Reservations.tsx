import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../logo/Logo";
import DatePicker from "./DatePicker";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import ReservationsHeroText from "./ReservationsHeroText";
import TimePicker from "./TimePicker";

const Reservations = () => {
  return (
    <Grid border="2px solid blue">
      <GridItem
        paddingLeft="10rem"
        height="600px"
        bgImage="booking/hero-bg-desktop@2x.jpg"
        bgSize="contain"
      >
        <Flex>
          <Box width="445px" color="white">
            <Logo />
            <ReservationsHeroText />
          </Box>
          <Flex
            className="reservations-form"
            width="540px"
            height="545px"
            bgColor="white"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              gridTemplateRows="repeat(5, 1fr)"
              as="form"
              width="80%"
              height="80%"
            >
              <NameInput />
              <EmailInput />

              <DatePicker />

              <TimePicker />
            </Grid>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Reservations;
