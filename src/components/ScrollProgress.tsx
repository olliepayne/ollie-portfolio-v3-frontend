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

  return (
    <progress
      className={className}
      value={currentValue.toString()}
      max={pageLength.toString()}
    >
      {currentValue}
    </progress>
  )
}

export default ScrollProgress
