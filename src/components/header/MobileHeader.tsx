/** @jsxImportSource theme-ui */
import { Container, Flex } from "theme-ui"
import { useState } from "react"
import Link from "next/link"

import HamburgerButton from "components/buttons/HamburgerButton"

const MobileHeader = () => {
  const [navIsExpanded, setNavIsExpanded] = useState(false)
  const handleNavIsExpanded = () => setNavIsExpanded(!navIsExpanded)

  return (
    <Container
      sx={{
        display: ["block", "none"],
        py: 2
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center"
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
        <HamburgerButton activeState={navIsExpanded} handleActiveState={handleNavIsExpanded} />
      </Flex>
    </Container>
  )
}

export default MobileHeader
