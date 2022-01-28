/** @jsxImportSource theme-ui */
import { Box, Flex } from "theme-ui"
import Link from "next/link"

import { homepageRegionLinks, pageLinks } from "config/navLinks"

// Props
export interface IMobileNav {
  className?: string
  isExpanded: boolean
}

const MobileNav = ({ className, isExpanded }: IMobileNav) => {
  return (
    <nav
      className={className}
      sx={{
        width: "32px",
        height: "32px",
        position: "absolute",
        zIndex: 10,
        transform: isExpanded ? "scale(100, 100)" : "scale(1, 1)",
        borderRadius: "50%",
        bg: "themeCharcoal",
        color: "white",
        overflow: "hidden",
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
          listStyle: "none"
        }}
      >
        {homepageRegionLinks.map(({ text, url }, index) => (
          <li key={`mobile-homepage-region-link:${index}`}>
            <Link href={url}>
              <a
                sx={{
                  variant: "links.underlineLeftToRight"
                }}
              >
                {text}
              </a>
            </Link>
          </li>
        ))}
      </Flex>

      {/* Page links */}
      <Flex
        as="ul"
        sx={{
          p: 0,
          m: 0,
          flexDirection: "column",
          alignItems: "center",
          listStyle: "none"
        }}
      >
        {pageLinks.map(({ text, url }, index) => (
          <li key={`mobile-page-link:${index}`}>
            <Link href={url}>
              <a
                sx={{
                  variant: "links.underlineLeftToRight"
                }}
              >
                {text}
              </a>
            </Link>
          </li>
        ))}
      </Flex>
    </nav>
  )
}

export default MobileNav
