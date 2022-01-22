/** @jsxImportSource theme-ui */
import { Flex } from "theme-ui"
import Link from "next/link"

import { navLinks } from "config/navLinks"

const DesktopNav = () => {
  return (
    <nav>
      <Flex
        as="ul"
        sx={{
          p: 0,
          m: 0,
          listStyle: "none"
        }}
      >
        {navLinks.map(({ text, url }) => (
          <li>
            <Link href={url}>
              <a
                sx={{
                  fontSize: ""
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

export default DesktopNav
