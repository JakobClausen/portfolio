import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import "../../styles/framerMotion.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
