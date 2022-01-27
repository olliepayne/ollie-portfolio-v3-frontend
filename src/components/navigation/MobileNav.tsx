/** @jsxImportSource theme-ui */
import { Flex } from "theme-ui"
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
        width: isExpanded ? "calc(100vw + 100vh)" : "32px",
        height: isExpanded ? "calc(100vw + 100vh)" : "32px",
        position: "absolute",
        zIndex: 10,
        top: isExpanded ? "-100%" : -3,
        right: isExpanded ? "-50%" : -3,
        borderRadius: "50%",
        bg: "themeCharcoal",
        color: "white",
        overflow: "hidden",
        transition: "all 0.45s ease-out"
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
