import { Theme } from "theme-ui"

const theme: Theme = {
  breakpoints: ["992px"],
  sizes: {},
  space: {
    0: 0, // 0px
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "1rem", // 16px
    4: "2rem", // 32px
    5: "4rem", // 64px
    6: "8rem" // 128px
  },
  fonts: {
    primary: "Roboto"
  },
  fontSizes: {
    mobile: {
      h1: {}
    },
    desktop: {
      h1: "4.209rem", // 67.34px
      h2: "3.157rem", // 50.52px
      h3: "2.369rem", // 37.90px
      h4: "1.777rem", // 28.43px
      h5: "1.333rem", // 21.33px
      paragraph: "1rem", // 16px
      text: "1rem", // 16px
      link: "1rem" // 16px
    }
  },
  text: {
    default: {},
    heading: {
      fontFamily: "primary"
    },
    paragraph: {
      fontFamily: "primary"
    }
  },
  layout: {
    container: {
      maxWidth: 1200,
      px: 3
    },
    small: {
      maxWidth: 600,
      px: 3
    },
    medium: {
      maxWidth: 800,
      px: 3
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
  links: {
    resetStyles: {
      textDecoration: "none",
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
