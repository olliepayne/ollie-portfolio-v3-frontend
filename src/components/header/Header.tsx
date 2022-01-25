/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react"

import DesktopHeader from "components/header/DesktopHeader"
import MobileHeader from "./MobileHeader"

// Props
export interface IHeader {
  showScrollProgress?: boolean
}

const Header = ({ showScrollProgress }: IHeader) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) return setHasScrolled(true)
      setHasScrolled(false)
    })

    return () => {}
  }, [])

  return (
    <header
      sx={{
        width: "100%",
        py: hasScrolled ? 3 : 4,
        position: "fixed",
        top: 0,
        zIndex: 10,
        bg: hasScrolled ? "white" : "transparent",
        boxShadow: hasScrolled ? "0 -2px 8px rgb(0 0 0 / 0.5)" : "none",
        transition: "all 0.2s ease-out",
        color: hasScrolled ? "black" : "white",
        "a::after": {
          bg: hasScrolled ? "black" : "white"
        }
      }}
    >
      <MobileHeader />
      <DesktopHeader />
    </header>
  )
}

export default Header
