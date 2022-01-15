/** @jsxImportSource theme-ui */
import { Box, Heading } from "theme-ui"
import { useState } from "react"

import DesktopNav from "components/navigation/DesktopNav"

const DesktopHeader = () => {
  return (
    <Box>
      <DesktopNav />
    </Box>
  )
}

export default DesktopHeader