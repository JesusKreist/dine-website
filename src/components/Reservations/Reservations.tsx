import { Flex, Grid, GridItem, Image, Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../HomePage/Footer/Footer";
import Logo from "../logo/Logo";
import ReservationsForm from "./ReservationsForm";
import ReservationsHeroText from "./ReservationsHeroText";

const Reservations = () => {
  return (
    <Grid>
      <GridItem
        paddingLeft={{ lg: "10rem" }}
        height={{ md: "600px", lg: "600px" }}
        bgImage={{
          md: "booking/hero-bg-tablet@2x.jpg",
          lg: "booking/hero-bg-desktop@2x.jpg",
        }}
        bgSize="contain"
        marginBottom={{ md: "450px", lg: "unset" }}
      >
        <Box
          marginLeft={{ md: "3rem", lg: "unset" }}
          marginTop={{ md: "4rem", lg: "unset" }}
        >
          <Logo />
        </Box>

        <Flex
          direction={{ md: "column", lg: "row" }}
          gap={{ md: "3rem", lg: "7rem" }}
          marginTop={{ md: "4rem", lg: "9rem" }}
          alignItems={{ md: "center", lg: "unset" }}
        >
          <ReservationsHeroText />
          <ReservationsForm />
        </Flex>
      </GridItem>
      <GridItem display={{ md: "none", lg: "unset" }}>
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
