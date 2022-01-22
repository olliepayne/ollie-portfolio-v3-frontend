import { Theme } from "theme-ui"

const theme: Theme = {
  breakpoints: ["768px"],
  sizes: {},
  space: {
    0: "0.25rem", // 4px
    1: "0.5rem", // 8px
    2: "1rem", // 16px
    3: "2rem", // 32px
    4: "4rem", // 64px
    5: "8rem" // 128px
  },
  fonts: {
    primary: "Roboto"
  },
  fontSizes: {
    mobile: {
      h1: {}
    },
    desktop: {
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      paragraph: {},
      text: {},
      link: {}
    }
  },
  text: {
    default: {},
    heading: {},
    paragraph: {}
  },
  layout: {
    container: {
      maxWidth: 1200,
      px: 2
    },
    small: {
      maxWidth: 600,
      px: 2
    },
    medium: {
      maxWidth: 800,
      px: 2
    }
  },
  buttons: {
    resetStyles: {
      p: 0,
      bg: "transparent",
      borderRadius: 0,
      cursor: "pointer"
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

export default theme
