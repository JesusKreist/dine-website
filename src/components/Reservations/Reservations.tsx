import { Flex, Grid, GridItem, Image, Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../HomePage/Footer/Footer";
import Logo from "../logo/Logo";
import ReservationsForm from "./ReservationsForm";
import ReservationsHeroText from "./ReservationsHeroText";

const Reservations = () => {
  return (
    <Grid>
      <Flex
        paddingLeft={{ xl: "10rem" }}
        height={{ base: "80vh", md: "600px", xl: "600px" }}
        bgImage={{
          base: "booking/hero-bg-mobile@2x.jpg",
          md: "booking/hero-bg-tablet@2x.jpg",
          xl: "booking/hero-bg-desktop@2x.jpg",
        }}
        bgPosition="center"
        bgSize="cover"
        marginBottom={{ base: "585px", md: "450px", lg: "500px", xl: "unset" }}
        direction={{ base: "column", md: "column", xl: "row" }}
        alignItems={{ base: "center", md: "unset" }}
        gap={{ base: "2.5rem", md: "unset" }}
      >
        <Box
          marginLeft={{ md: "3rem", xl: "unset" }}
          marginTop={{ base: "4rem", xl: "3rem" }}
        >
          <Logo />
        </Box>

        <Flex
          direction={{ base: "column", md: "column", xl: "row" }}
          gap={{ md: "3rem", xl: "7rem" }}
          marginTop={{ md: "4rem", xl: "9rem" }}
          alignItems={{ md: "center", xl: "unset" }}
        >
          <ReservationsHeroText />
          <ReservationsForm />
        </Flex>
      </Flex>
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
