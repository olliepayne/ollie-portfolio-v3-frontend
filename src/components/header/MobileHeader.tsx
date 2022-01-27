/** @jsxImportSource theme-ui */
import { Container, Flex } from "theme-ui"
import { useEffect, useState } from "react"
import Link from "next/link"

import HamburgerButton from "components/buttons/HamburgerButton"
import MobileNav from "components/navigation/MobileNav"
import { isExternal } from "util/types"

const MobileHeader = () => {
  const [navIsExpanded, setNavIsExpanded] = useState(false)
  const handleNavIsExpanded = () => setNavIsExpanded(!navIsExpanded)
  useEffect(() => {
    if (global?.window?.document?.body?.style)
      global.window.document.body.style.overflowY = navIsExpanded
        ? "hidden"
        : "auto"
  }, [navIsExpanded])

  return (
    <Container
      sx={{
        py: 2,
        display: ["block", "none"],
        overflow: "hidden"
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
              position: "relative",
              zIndex: 11,
              textDecoration: "none",
              fontFamily: "primary",
              fontSize: "2.369rem",
              fontWeight: 500,
              cursor: "pointer",
              color: navIsExpanded ? "white" : "black"
            }}
          >
            Ollie Payne
          </a>
        </Link>
        <HamburgerButton
          activeState={navIsExpanded}
          handleActiveState={handleNavIsExpanded}
          className="hamburger-button"
          sx={{
            position: "relative",
            zIndex: 11
          }}
        />
      </Flex>
      <MobileNav isExpanded={navIsExpanded} />
    </Container>
  )
}

export default MobileHeader
