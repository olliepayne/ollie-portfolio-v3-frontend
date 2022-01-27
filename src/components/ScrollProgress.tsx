/** @jsxImportSource theme-ui */
import { Box } from "theme-ui"
import { useEffect, useState } from "react"

// Props
export interface IScrollProgress {
  className?: string
}

const ScrollProgress = ({ className }: IScrollProgress) => {
  const [currentValue, setCurrentValue] = useState(0)
  let pageLength = 0

  useEffect(() => {
    setCurrentValue(global?.window?.scrollY)

    if (globalThis) {
      pageLength = global?.window?.document.body.getBoundingClientRect().bottom

      window.addEventListener("scroll", () => {
        const newValue = window.scrollY
        console.log(newValue)
        setCurrentValue(newValue)
      })
    }
  }, [])

  // TODO: Add: debouncing

  return (
    <Box
      role="progressbar"
      aria-valuenow={currentValue / pageLength}
      aria-valuemin={0}
      aria-valuemax={100}
      className={className}
      sx={{
        width: (screen.width * currentValue) / screen.height,
        height: "2px",
        bg: "themePink"
      }}
    >
      <span></span>
    </Box>
  )
}

export default ScrollProgress
