import "../styles/globals.css";
import "@fontsource/league-spartan/100.css";
import "@fontsource/league-spartan/200.css";
import "@fontsource/league-spartan/300.css";
import "@fontsource/league-spartan/400.css";
import "@fontsource/league-spartan/500.css";
import "@fontsource/league-spartan/600.css";
import "@fontsource/league-spartan/700.css";
import "@fontsource/league-spartan/800.css";
import "@fontsource/league-spartan/900.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import MainContainer from "../src/components/layout/MainContainer/MainContainer";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ChakraProvider>
  );
}
