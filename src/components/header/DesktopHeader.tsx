/** @jsxImportSource theme-ui */
import { Flex, Heading } from "theme-ui"
import { useState } from "react"

import DesktopNav from "components/navigation/DesktopNav"
import HamburgerButton from "components/buttons/HamburgerButton"

const DesktopHeader = () => {
  const [state, setState] = useState(false)
  const handleState = () => setState(!state)

  return (
    <Flex
      sx={{
        justifyContent: "space-between"
      }}
    >
      <DesktopNav />
      <HamburgerButton activeState={state} handleActiveState={handleState} />
    </Flex>
  )
}

export default DesktopHeader
