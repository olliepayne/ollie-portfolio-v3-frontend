/** @jsxImportSource theme-ui */
import { Container, Flex, Heading } from "theme-ui"
import { useState } from "react"

import DesktopNav from "components/navigation/DesktopNav"

// Props
export interface IDesktopHeader {
  className?: string
}

const DesktopHeader = ({ className }: IDesktopHeader) => {
  const [state, setState] = useState(false)
  const handleState = () => setState(!state)

  return (
    <Container
      className={className}
      sx={{
        display: ["none", "block"]
      }}
    >
      <DesktopNav />
    </Container>
  )
}

export default DesktopHeader
