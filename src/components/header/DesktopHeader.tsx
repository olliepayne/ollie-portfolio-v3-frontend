/** @jsxImportSource theme-ui */
import { Container, Flex, Heading } from "theme-ui"
import { useState } from "react"

import DesktopNav from "components/navigation/DesktopNav"
import HamburgerButton from "components/buttons/HamburgerButton"

const DesktopHeader = () => {
  const [state, setState] = useState(false)
  const handleState = () => setState(!state)

  return (
    <Container>
      <Flex
        sx={{
          justifyContent: "space-between"
        }}
      >
        <DesktopNav />
        <HamburgerButton activeState={state} handleActiveState={handleState} />
      </Flex>
    </Container>
  )
}

export default DesktopHeader
