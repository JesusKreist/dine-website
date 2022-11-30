import { Box, Button, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { url } from "inspector";
import { Fragment } from "react";
import Logo from "../logo/Logo";
import IntroSection from "./IntroSection";
import RestaurantShowcase from "./RestaurantShowcase/RestaurantShowcase";

const HomePage = () => {
  return (
    <Fragment>
      <IntroSection />
      <RestaurantShowcase />
    </Fragment>
  );
};

export default HomePage;
