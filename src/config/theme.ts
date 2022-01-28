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
    themeCharcoal: "#1c1c1c",
    themePebble: "#5d707a",
    almostWhite: "#F4F4F4",
    themeCream: "#fffcf5"
  },
  fonts: {
    heading: "Montserrat",
    body: "Roboto"
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
      fontFamily: "body",
      fontSize: ["mobile.text", "desktop.text"],
      fontWeight: 400
    },
    heading: {
      fontFamily: "heading",
      fontWeight: 700
    },
    paragraph: {
      fontFamily: "body",
      fontWeight: 400,
      fontSize: ["mobile.paragraph", "desktop.paragraph"]
    },
    srOnly: {
      width: 1,
      height: 1,
      position: "absolute",
      top: "auto",
      left: -10000,
      overflow: "hidden"
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
    },
    primary: {
      bg: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "almostWhite"
    }
  },
  links: {
    resetStyles: {
      textDecoration: "none",
      cursor: "pointer",
      fontFamily: "body"
    },
    underlineOut: {
      py: 1,
      fontFamily: "body",
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
    },
    underlineLeftToRight: {
      py: 1,
      fontFamily: "body",
      fontSize: ["desktop.link"],
      fontWeight: 500,
      cursor: "pointer",
      position: "relative",
      "::after": {
        content: `""`,
        width: 0,
        height: "3px",
        position: "absolute",
        left: 0,
        transform: "translateX(-50%)",
        bottom: 0,
        bg: "black",
        transition: "all 0.15s ease-in"
      },
      ":hover": {
        "::after": {
          width: "80%",
          left: "50%",
          transition: "all 0.15s ease-in"
        }
      }
    }
  },
  cards: {},
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
    },
    markdown: {
      h1: {
        my: 4,
        variant: "styles.h1"
      },
      h2: {
        my: 4,
        variant: "styles.h1"
      },
      h3: {
        my: 4,
        variant: "styles.h1"
      },
      h4: {
        my: 3,
        variant: "styles.h1"
      },
      h5: {
        my: 3,
        variant: "styles.h1"
      },
      p: {
        my: 3,
        variant: "text.paragraph"
      }
    }
  }
}

export default theme
