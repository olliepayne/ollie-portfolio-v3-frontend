/** @jsxImportSource theme-ui */
import { Box } from "theme-ui"
import { alpha } from "@theme-ui/color"
import { useEffect, useState } from "react"

import { debounce } from "helpers/general"

// Props
export interface IScrollProgress {
  className?: string
}

const ScrollProgress = ({ className }: IScrollProgress) => {
  const [scrollPercent, setScrollPercent] = useState(0)
  const calculateScrollPercent = () => {
    const currentScrollY = global?.window?.scrollY
    const documentHeight = global?.window?.document?.body?.offsetHeight
    const windowHeight = global?.window?.innerHeight

    const newScrollPercent =
      (currentScrollY / (documentHeight - windowHeight)) * 100
    // const newScrollPercentRounded = Math.round(newScrollPercent * 100)
    setScrollPercent(newScrollPercent)
  }

  useEffect(() => {
    global?.window?.addEventListener(
      "scroll",
      debounce(calculateScrollPercent, 10)
    )
  }, [])

  return (
    <Box
      role="progressbar"
      aria-valuenow={scrollPercent}
      aria-valuemin={0}
      aria-valuemax={100}
      className={className}
      sx={{
        width: `${scrollPercent}%`,
        height: "4px",
        bg: "black",
        opacity: 0.1,
        display: scrollPercent > 0 ? "block" : "none",
        borderRadius: "4px"
      }}
    >
      <span
        sx={{
          variant: "text.srOnly"
        }}
      >
        {scrollPercent}%
      </span>
    </Box>
  )
}

export default ScrollProgress
