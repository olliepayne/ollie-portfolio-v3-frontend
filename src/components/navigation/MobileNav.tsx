/** @jsxImportSource theme-ui */
import { Flex, Divider } from "theme-ui"
import { alpha } from "@theme-ui/color"
import Link from "next/link"

import { homepageRegionLinks, pageLinks } from "config/navLinks"

// Props
export interface IMobileNav {
  className?: string
  hasScrolled: boolean
  isExpanded: boolean
}

const MobileNav = ({ className, isExpanded }: IMobileNav) => {
  return (
    <nav
      className={className}
      sx={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: "50%",
        zIndex: 10,
        transform: "translate(-50%, 0)",
        bg: isExpanded
          ? alpha("themeCharcoal", 0.7)
          : alpha("themeCharcoal", 0),
        color: "white",
        pointerEvents: isExpanded ? "auto" : "none",
        backdropFilter: isExpanded ? "blur(10px)" : "none",
        transition: "all 0.35s ease-out"
      }}
    >
      <Flex
        sx={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: isExpanded ? 1 : 0,
          transition: "all 0.35s ease-out"
        }}
      >
        {/* Homepage region links */}
        <Flex
          as="ul"
          sx={{
            p: 0,
            m: 0,
            flexDirection: "column",
            alignItems: "center",
            listStyle: "none",
            ":not(:first-of-type)": {
              mt: 2
            }
          }}
        >
          {homepageRegionLinks.map(({ text, url }, index) => (
            <li key={`mobile-homepage-region-link:${index}`}>
              <Link href={url}>
                <a
                  sx={{
                    variant: "links.underlineLeftToRight",
                    display: "inline-block"
                  }}
                >
                  {text}
                </a>
              </Link>
            </li>
          ))}
        </Flex>

        <Divider
          sx={{
            width: "32px",
            height: "2px",
            borderRadius: "4px",
            bg: "white"
          }}
        />

        {/* Page links */}
        <Flex
          as="ul"
          sx={{
            p: 0,
            mt: 4,
            flexDirection: "column",
            alignItems: "center",
            listStyle: "none",
            ":not(:first-of-type)": {
              mt: 2
            }
          }}
        >
          {pageLinks.map(({ text, url }, index) => (
            <li key={`mobile-page-link:${index}`}>
              <Link href={url}>
                <a
                  sx={{
                    variant: "links.underlineLeftToRight",
                    display: "inline-block"
                  }}
                >
                  {text}
                </a>
              </Link>
            </li>
          ))}
        </Flex>
      </Flex>
    </nav>
  )
}

export default MobileNav
