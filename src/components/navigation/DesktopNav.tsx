/** @jsxImportSource theme-ui */
import { Flex, Box, Heading } from "theme-ui"
import Link from "next/link"

import { homepageRegionLinks, pageLinks } from "config/navLinks"
import smoothScroll from "helpers/smoothScroll"

const DesktopNav = () => {
  return (
    <nav>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Link href="/">
          <a
            sx={{
              textDecoration: "none",
              fontFamily: "primary",
              fontSize: "2.369rem",
              fontWeight: 500,
              cursor: "pointer"
            }}
          >
            Ollie Payne
          </a>
        </Link>
        <Flex
          as="ul"
          sx={{
            p: 0,
            m: 0,
            listStyle: "none",
            "li:not(:last-of-type)": {
              mr: 3
            }
          }}
        >
          {homepageRegionLinks.map(({ text, url }, index) => (
            <li key={`homepage-region-link:${index}`}>
              <Link href={global?.window?.location.pathname === "/" ? "" : url}>
                <a
                  onClick={() => smoothScroll(url.split("/")[1])}
                  sx={{
                    variant: "links.underlineOut"
                  }}
                >
                  {text}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <span
              sx={{
                mx: 4,
                fontFamily: "primary",
                fontWeight: 700
              }}
            >
              |
            </span>
          </li>
          {pageLinks.map(({ text, url }, index) => (
            <li key={`page-link:${index}`}>
              <Link href={url}>
                <a
                  sx={{
                    variant: "links.underlineOut"
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

export default DesktopNav
