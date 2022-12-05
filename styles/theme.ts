import { extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
  background: "black",
  color: "white",
  border: "2px solid black",
  _hover: {
    background: "white",
    color: "black",
    border: "2px solid black",
  },
});

const brandPrimaryOnLight = defineStyle({
  color: "white",
  border: "2px solid white",
  _hover: {
    background: "white",
    color: "black",
    border: "2px solid white",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary, brandPrimaryOnLight },
});

const theme = extendTheme({
  fonts: {
    heading: `'League Spartan', sans-serif`,
    body: `'League Spartan', sans-serif`,
  },
  components: {
    Button: buttonTheme,
  },
});

export default theme;
