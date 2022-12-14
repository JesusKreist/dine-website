import { Box, Flex, Grid, GridItem, Button, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../logo/Logo";
import DatePicker from "./DatePicker";
import EmailInput from "./EmailInput";
import GuestsNumberPicker from "./GuestsNumberPicker";
import NameInput from "./NameInput";
import ReservationsForm from "./ReservationsForm";
import ReservationsHeroText from "./ReservationsHeroText";
import TimePicker from "./TimePicker";

const Reservations = () => {
  return (
    <Grid>
      <GridItem
        paddingLeft="10rem"
        height="600px"
        bgImage="booking/hero-bg-desktop@2x.jpg"
        bgSize="contain"
      >
        <Flex gap="7rem">
          <Box width="445px" color="white">
            <Logo />
            <ReservationsHeroText />
          </Box>
          <ReservationsForm />
        </Flex>
      </GridItem>
      <GridItem>
        <Image
          width="993px"
          height="320px"
          src="patterns/pattern-curve-bottom-right.svg"
          alt="curve pattern"
          objectFit="cover"
          objectPosition="top right"
        />
      </GridItem>
    </Grid>
  );
};

export default Reservations;
