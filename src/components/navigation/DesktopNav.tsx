/** @jsxImportSource theme-ui */
import { Flex, Heading } from "theme-ui"
import Link from "next/link"

import { navLinks } from "config/navLinks"

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
              variant: "links.resetStyles"
            }}
          >
            <Heading>Ollie Payne</Heading>
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
          {navLinks.map(({ text, url }) => (
            <li>
              <Link href={url}>
                <a
                  sx={{
                    fontFamily: "primary",
                    fontSize: "desktop.link",
                    fontWeight: 500,
                    cursor: "pointer"
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
