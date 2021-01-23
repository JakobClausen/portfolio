import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
};

const colors = {
  brand: {
    100: "#141414",
  },
  text: {
    100: "#f8f8ff",
  },
};

const fonts = {
  heading: "'My Heading Font', sans-serif",
  body: "'My Heading Font', sans-serif",
};

export const theme = extendTheme({ breakpoints, colors, fonts });
