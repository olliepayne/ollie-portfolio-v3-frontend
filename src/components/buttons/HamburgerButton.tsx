/** @jsxImportSource theme-ui */
import { ThemeUICSSObject, Button } from "theme-ui"

// Props
export interface IHamburgerButton {
  className?: string
  activeState: boolean
  handleActiveState: () => void
}

const HamburgerButton = ({
  className,
  activeState,
  handleActiveState
}: IHamburgerButton) => {
  const spanStyles: ThemeUICSSObject = {
    width: "32px",
    height: "20px",
    verticalAlign: "middle",
    display: "inline-flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    ".top, .middle, .bottom": {
      width: "100%",
      height: "2px",
      opacity: 1,
      bg: "black",
      display: "inline-block",
      transition: "all 0.2s ease-out"
    }
  }

  const spanActiveStyles: ThemeUICSSObject = {
    ...spanStyles,
    ".top": {
      width: "38px",
      transformOrigin: "0 -10px",
      transform: "rotateZ(45deg)"
    },
    ".middle": {
      width: 0,
      opacity: 0
    },
    ".bottom": {
      width: "38px",
      // transformOrigin: "left bottom",
      transform: "rotateZ(-45deg) translateY(-10px)"
    }
  }

  return (
    <Button onClick={handleActiveState} variant="resetStyles">
      <span sx={activeState ? spanActiveStyles : spanStyles}>
        <span className="top" />
        <span className="middle" />
        <span className="bottom" />
      </span>
    </Button>
  )
}

export default HamburgerButton
