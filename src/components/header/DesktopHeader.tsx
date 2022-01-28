/** @jsxImportSource theme-ui */
import { Container } from "theme-ui"

import DesktopNav from "components/navigation/DesktopNav"

// Props
export interface IDesktopHeader {
  className?: string
}

const DesktopHeader = ({ className }: IDesktopHeader) => {
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
