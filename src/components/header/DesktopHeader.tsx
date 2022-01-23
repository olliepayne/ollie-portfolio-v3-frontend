/** @jsxImportSource theme-ui */
import { Container, Flex, Heading } from "theme-ui"
import { useState } from "react"

import DesktopNav from "components/navigation/DesktopNav"

const DesktopHeader = () => {
  const [state, setState] = useState(false)
  const handleState = () => setState(!state)

  return (
    <Container>
      <DesktopNav />
    </Container>
  )
}

export default DesktopHeader
