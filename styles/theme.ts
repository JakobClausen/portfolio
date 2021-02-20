import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em",
  md: "48em",
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
  heading: "'Bebas Neue', sans-serif",
  body: "'roboto', sans-serif",
};

export const theme = extendTheme({ breakpoints, colors, fonts });
