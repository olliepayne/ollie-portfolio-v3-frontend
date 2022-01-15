/** @jsxImportSource theme-ui */
import Link from "next/link"

import { navLinks } from "config/navLinks"

const DesktopNav = () => {
  return (
    <nav>
      <ul
        sx={{
          p: 0,
          m: 0
        }}
      >
        {navLinks.map(({ text, url }) => (
          <li>
            <Link href={url}>
              <a sx={{
                fontSize: ""
              }}>
                {text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNav
