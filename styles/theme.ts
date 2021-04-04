import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0em",
  sm: "15em",
  md: "30em",
  lg: "62em",
  xl: "80em",
};

const colors = {
  brand: "#1b1b1b",
  text: {
    main: "#cecece",
  },
  offColor: "#b33a0f",
};

const fonts = {
  heading: "Bebas Neue",
  body: "'Varela', sans-serif",
};

export const theme = extendTheme({ breakpoints, colors, fonts });
