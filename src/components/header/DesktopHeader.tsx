/** @jsxImportSource theme-ui */
import { Box, Heading } from "theme-ui"
import { useState } from "react"

import DesktopNav from "components/navigation/DesktopNav"
import HamburgerButton from "components/buttons/HamburgerButton"

const DesktopHeader = () => {
  const [state, setState] = useState(false)
  const handleState = () => setState(!state)

  return (
    <Box>
      <DesktopNav />
      <HamburgerButton activeState={state} handleActiveState={handleState} />
    </Box>
  )
}

export default DesktopHeader
