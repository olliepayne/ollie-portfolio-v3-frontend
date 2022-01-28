/** @jsxImportSource theme-ui */
import { Container, Flex } from "theme-ui"
import { useEffect, useState } from "react"
import Link from "next/link"

import HamburgerButton from "components/buttons/HamburgerButton"
import MobileNav from "components/navigation/MobileNav"

// Props
export interface IMobileHeader {
  hasScrolled: boolean
}

const MobileHeader = ({ hasScrolled }: IMobileHeader) => {
  const [navIsExpanded, setNavIsExpanded] = useState(false)
  const handleNavIsExpanded = () => setNavIsExpanded(!navIsExpanded)

  const [headerColor, setHeaderColor] = useState("white")
  const handleSetHeaderColor = () => {
    if (navIsExpanded || !hasScrolled) return setHeaderColor("white")

    setHeaderColor("black")
  }

  const handleToggleScrolling = () => {
    if (global?.window?.document?.body?.style)
      global.window.document.body.style.overflowY = navIsExpanded
        ? "hidden"
        : "auto"
  }

  useEffect(() => {
    handleToggleScrolling()
    handleSetHeaderColor()
  }, [hasScrolled, navIsExpanded])

  return (
    <Container
      sx={{
        py: 2,
        display: ["block", "none"]
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
              fontFamily: "body",
              fontSize: "2.369rem",
              fontWeight: 500,
              cursor: "pointer",
              color: headerColor
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
            zIndex: 11,
            ".top, .middle, .bottom": {
              bg: headerColor
            }
          }}
        />
      </Flex>
      <MobileNav
        hasScrolled={hasScrolled}
        isExpanded={navIsExpanded}
        sx={{
          "a::after": {
            bg: headerColor
          }
        }}
      />
    </Container>
  )
}

export default MobileHeader
