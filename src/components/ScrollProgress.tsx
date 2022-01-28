/** @jsxImportSource theme-ui */
import { Box } from "theme-ui"
import { alpha } from "@theme-ui/color"
import { useEffect, useState } from "react"

// Props
export interface IScrollProgress {
  className?: string
}

const ScrollProgress = ({ className }: IScrollProgress) => {
  const scrollLength =
    global?.window?.document?.body?.getBoundingClientRect().bottom +
    global?.window?.innerHeight

  const [currentValue, setCurrentValue] = useState(0)
  const calculateNewValue = () => {
    const newState = global?.window?.scrollY
    setCurrentValue(newState)
  }

  const [adjustedWidth, setAdjustedWidth] = useState(0)
  const calculateAdjustedWidth = () => {
    const newState = (currentValue / scrollLength) * 100
    setAdjustedWidth(newState)
  }
  useEffect(calculateAdjustedWidth, [currentValue])

  const debounce = (callback: any, delay: number) => {
    let handler: any

    return (...args: any) => {
      if (handler) clearTimeout(handler)
      handler = setTimeout(() => {
        callback(...args)
      }, delay)
    }
  }

  useEffect(() => {
    setCurrentValue(global?.window?.scrollY)
    console.log(`pageLength: ${scrollLength}`)

    global?.window?.addEventListener("scroll", debounce(calculateNewValue, 10))
  }, [])

  return (
    <Box
      role="progressbar"
      aria-valuenow={currentValue / scrollLength}
      aria-valuemin={0}
      aria-valuemax={1}
      className={className}
      sx={{
        width: `${adjustedWidth}%`,
        height: "2px",
        bg: alpha("themePink", 0.75),
        display: currentValue > 0 ? "block" : "none",
        borderRadius: "4px"
      }}
    >
      <span></span>
    </Box>
  )
}

export default ScrollProgress
