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
  const buttonStyles: ThemeUICSSObject = {
    width: "32px",
    height: "20px",
    position: "relative",
    ".top, .middle, .bottom": {
      width: "100%",
      height: "2px",
      opacity: 1,
      bg: "black",
      display: "inline-block",
      position: "absolute",
      left: 0,
      transition: "all 0.2s ease-out"
    },
    ".top": {
      top: 0
    },
    ".middle": {
      top: "50%"
    },
    ".bottom": {
      bottom: 0
    }
  }

  const activeStyles: ThemeUICSSObject = {
    ...buttonStyles,
    ".top": {
      top: "50%",
      transform: "translateY(-50%) rotateZ(45deg)"
    },
    ".middle": {
      width: 0,
      opacity: 0
    },
    ".bottom": {
      transform: "translateY(-50%) rotateZ(-45deg)"
    }
  }

  return (
    <Button
      onClick={handleActiveState}
      variant="resetStyles"
      className="hamburger-button"
      sx={activeState ? activeStyles : buttonStyles}
    >
      <span className="top" />
      <span className="middle" />
      <span className="bottom" />
    </Button>
  )
}

export default HamburgerButton
