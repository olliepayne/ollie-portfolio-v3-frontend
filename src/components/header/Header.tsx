/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react"

import DesktopHeader from "components/header/DesktopHeader"
import MobileHeader from "components/header/MobileHeader"
import { debounce } from "helpers/general"

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const checkScroll = () => {
    if (global?.window?.scrollY > 0) return setHasScrolled(true)
    setHasScrolled(false)
  }

  useEffect(() => {
    document.addEventListener("scroll", debounce(checkScroll, 10))
  }, [])

  return (
    <header
      sx={{
        width: "100%",
        py: hasScrolled ? 2 : 3,
        position: "fixed",
        top: 0,
        zIndex: 10,
        bg: hasScrolled ? "white" : "transparent",
        boxShadow: hasScrolled ? "0 -2px 8px rgb(0 0 0 / 0.5)" : "none",
        transition: "all 0.2s ease-out"
      }}
    >
      <MobileHeader hasScrolled={hasScrolled} />
      <DesktopHeader
        sx={{
          color: hasScrolled ? "black" : "white",
          "a::after": {
            bg: hasScrolled ? "black" : "white"
          }
        }}
      />
    </header>
  )
}

export default Header
