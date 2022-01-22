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
    height: "32px",
    verticalAlign: "middle",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    ".top, .middle, .bottom": {
      width: "100%",
      height: "2px",
      my: 1,
      opacity: 1,
      bg: "black",
      display: "inline-block",
      transition: "all 0.2s ease-out"
    }
  }

  const spanActiveStyles: ThemeUICSSObject = {
    ...spanStyles,
    ".top": {
      transformOrigin: "top left",
      transform: "rotateZ(45deg)"
    },
    ".middle": {
      width: 0,
      opacity: 0
    },
    ".bottom": {
      transformOrigin: "top left",
      transform: "rotateZ(-45deg)"
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
