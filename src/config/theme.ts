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
  colors: {
    themePink: "#ff94b1",
    magnesium: "#C4C4C4",
    themeCharcoal: "#0A0A0A",
    themeBlue: "#f0f6ff"
  },
  fonts: {
    primary: "Roboto"
  },
  fontSizes: {
    mobile: {
      h1: {},
      h4: "1.333rem", // 21.33px
      h5: "1.125rem", // 18px
      paragraph: "0.875rem", // 14px
      text: "0.875rem" // 14px
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
    default: {
      fontFamily: "primary",
      fontSize: ["mobile.text", "desktop.text"],
      fontWeight: 400
    },
    heading: {
      fontFamily: "primary",
      fontWeight: 700
    },
    paragraph: {
      fontFamily: "primary",
      fontWeight: 400,
      fontSize: ["mobile.paragraph", "desktop.paragraph"]
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
    },
    underlineOut: {
      py: 1,
      fontFamily: "primary",
      fontSize: ["desktop.link"],
      fontWeight: 500,
      cursor: "pointer",
      position: "relative",
      "::after": {
        content: `""`,
        width: 0,
        height: "2px",
        borderRadius: "32px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: 0,
        bg: "black",
        transition: "all 0.15s ease-in"
      },
      ":hover": {
        "::after": {
          width: "100%",
          transition: "all 0.15s ease-in"
        }
      }
    }
  },
  cards: {
    primary: {
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgb(0 0 0 / 0.3)"
    }
  },
  styles: {
    root: {
      fontFamily: "primary"
    },
    h1: {
      variant: "text.heading",
      fontSize: ["mobile.h1", "desktop.h1"]
    },
    h2: {
      variant: "text.heading",
      fontSize: ["mobile.h2", "desktop.h2"]
    },
    h3: {
      variant: "text.heading",
      fontSize: ["mobile.h3", "desktop.h3"]
    },
    h4: {
      variant: "text.heading",
      fontSize: ["mobile.h4", "desktop.h4"]
    },
    h5: {
      variant: "text.heading",
      fontSize: ["mobile.h5", "desktop.h5"]
    }
  }
}

export default theme
