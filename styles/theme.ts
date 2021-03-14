import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0em",
  sm: "15em",
  md: "30em",
  lg: "62em",
  xl: "80em",
};

const colors = {
  brand: {
    100: "#1C1919",
  },
  text: {
    100: "#FBF7EE",
  },
  offColor: {
    100: "#E2C10A",
  },
};

const fonts = {
  heading: "Bebas Neue",
  body: "'roboto', sans-serif",
  code: "'Source Code Pro', monospace",
};

export const theme = extendTheme({ breakpoints, colors, fonts });
