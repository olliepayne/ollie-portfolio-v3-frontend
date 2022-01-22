/** @jsxImportSource theme-ui */

import DesktopHeader from "components/header/DesktopHeader"

const Header = () => {
  return (
    <header
      sx={{
        position: ["sticky", "static"]
      }}
    >
      <DesktopHeader />
    </header>
  )
}

export default Header
