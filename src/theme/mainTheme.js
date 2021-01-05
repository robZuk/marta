export const theme = {
  white: "hsl(0, 0%, 100%)",
  grey100: "hsl(0, 0%, 96%)",
  grey200: "hsl(0, 0%, 90%)",
  grey300: "hsl(0, 0%, 70%)",
  grey400: "hsl(0, 0%, 50%)",
  grey700: "hsl(0, 0%, 20%)",
  grey800: "hsl(0, 0%, 13%)",
  black: "hsl(0, 0%, 0%)",
  indianRed: "hsl(354, 34%, 44%);",

  fontSize: {
    xxs: "0.7rem",
    xs: "1rem",
    s: "1.6rem",
    m: "2.0rem",
    l: "2.4rem",
    xl: "4rem",
  },

  breakpoints: {
    mobileS: `(min-width: ${"320px"})`,
    mobileM: `(min-width: ${"375px"})`,
    mobileL: `(min-width: ${"425px"})`,
    tablet: `(min-width: ${"768px"})`,
    laptop: `(min-width: ${"1024px"})`,
    laptopM: `(min-width: ${"1366px"})`,
    laptopL: `(min-width: ${"1440px"})`,
    desktop: `(min-width: ${"2560px"})`,
  },

  orientation: {
    portrait: `(orientation: portrait)`,
    landscape: `(orientation: landscape)`,
  },
};
