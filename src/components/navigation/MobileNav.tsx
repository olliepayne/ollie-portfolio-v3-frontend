/** @jsxImportSource theme-ui */
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
        maxHeight: isExpanded ? "1000px" : 0,
        transformOrigin: "center top",
        transform: isExpanded ? "scale(1, 1)" : "scale(1, 0)",
        bg: "white",
        overflow: "hidden",
        transition: "all 0.2s ease-out"
      }}
    >
      {/* Homepage region links */}
      <ul>
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
      </ul>

      {/* Page links */}
    </nav>
  )
}

export default MobileNav
