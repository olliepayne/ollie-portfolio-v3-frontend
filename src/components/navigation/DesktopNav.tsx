/** @jsxImportSource theme-ui */
import { Flex, Box, Heading } from "theme-ui"
import Link from "next/link"

import { homepageRegionLinks, pageLinks } from "config/navLinks"

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
              variant: "links.underlineLeftToRight",
              textDecoration: "none",
              fontFamily: "body",
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
                    variant: "links.underlineLeftToRight"
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
