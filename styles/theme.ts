import { extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xlw": "1440px",
};

const brandPrimaryOnLight = defineStyle({
  background: "black",
  color: "white",
  border: "2px solid black",
  borderRadius: "none",
  padding: "2rem 3rem",
  fontSize: "xl",
  fontWeight: "bold",
  letterSpacing: "0.25ch",
  _hover: {
    background: "white",
    color: "black",
    border: "2px solid black",
  },
});

const brandPrimaryOnDark = defineStyle({
  color: "white",
  border: "2px solid white",
  borderRadius: "none",
  padding: "2rem 3rem",
  fontSize: "xl",
  fontWeight: "bold",
  letterSpacing: "0.25ch",
  _hover: {
    background: "white",
    color: "black",
    border: "2px solid white",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimaryOnLight, brandPrimaryOnDark },
});

const theme = extendTheme({
  fonts: {
    heading: `'League Spartan', sans-serif`,
    body: `'League Spartan', sans-serif`,
  },
  components: {
    Button: buttonTheme,
  },
  breakpoints,
});

export default theme;
