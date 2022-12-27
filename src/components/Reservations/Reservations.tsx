import { Flex, Grid, GridItem, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../HomePage/Footer/Footer";
import Logo from "../logo/Logo";
import ReservationsForm from "./ReservationsForm";
import ReservationsHeroText from "./ReservationsHeroText";

const Reservations = () => {
  return (
    <Grid>
      <Grid
        paddingLeft={{ "2xl": "10rem" }}
        height={{ base: "80vh", md: "600px" }}
        bgImage={{
          base: "booking/hero-bg-mobile@2x.jpg",
          md: "booking/hero-bg-tablet@2x.jpg",
          xl: "booking/hero-bg-desktop@2x.jpg",
        }}
        bgPosition="center"
        bgSize="cover"
        marginBottom={{
          base: "585px",
          md: "450px",
          lg: "500px",
          xl: "250px",
          "2xl": "unset",
        }}
        gridAutoFlow={{ base: "row", md: "row", xl: "row" }}
        alignItems={{ base: "center", md: "unset" }}
        gap={{ base: "2.5rem", md: "unset" }}
      >
        <Box
          margin="0 auto"
          marginLeft={{ md: "3rem", xl: "2rem", "2xl": "unset" }}
          marginTop={{ base: "4rem", xl: "3rem" }}
        >
          <Logo />
        </Box>

        <Grid
          gridAutoFlow={{ base: "row", "2xl": "column" }}
          gap={{ md: "3rem", xl: "7rem" }}
          marginTop={{ md: "4rem", "2xl": "9rem" }}
          alignItems={{ md: "center", "2xl": "unset" }}
          justifyContent="space-around"
        >
          <ReservationsHeroText />

          <ReservationsForm />
        </Grid>
      </Grid>
      <GridItem display={{ base: "none", xl: "unset" }}>
        <Image
          width="993px"
          height="320px"
          src="patterns/pattern-curve-bottom-right.svg"
          alt="curve pattern"
          objectFit="cover"
          objectPosition="top right"
        />
      </GridItem>
      <Footer />
    </Grid>
  );
};

export default Reservations;
