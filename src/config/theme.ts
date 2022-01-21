import { Theme } from "theme-ui"

export const theme: Theme = {
  breakpoints: ["768px"],
  sizes: {},
  space: {
    0: "0.25rem",
    1: "0.5rem",
    2: "1rem",
    3: "2rem",
    4: "4rem",
    5: "8rem"
  },
  fontSizes: {
    0: "0.875rem",
    1: "1rem",
    2: "1.5rem",
    3: "2.25rem",
    4: "3.75rem",
    5: "5.063rem"
  },
  text: {
    default: {},
    heading: {},
    paragraph: {}
  },
  layout: {},
  buttons: {
    resetStyles: {
      p: 0,
    }
  },
  styles: {
    root: {
      "*": {
        boxSizing: "border-box"
      },
      body: {
        p: 0,
        m: 0
      }
    },
    h1: {}
  }
}
