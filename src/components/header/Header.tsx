/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react"

import DesktopHeader from "components/header/DesktopHeader"

const Header = () => {
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
        position: "sticky",
        top: 0,
        zIndex: 10,
        bg: "white",
        boxShadow: hasScrolled ? "0 -2px 8px rgb(0 0 0 / 0.5)" : "none",
        transform: "all 0.2s ease-out"
      }}
    >
      <DesktopHeader />
    </header>
  )
}

export default Header
