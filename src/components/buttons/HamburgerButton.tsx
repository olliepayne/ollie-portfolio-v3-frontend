/** @jsxImportSource theme-ui */
import { ThemeUICSSObject, Button } from "theme-ui"

// Styles
const barStyles: ThemeUICSSObject = {
  width: "100%",
  height: "2px",
  my: "4px",
  display: "inline-block",
  bg: "black",
  opacity: 1,
  transform: "rotateZ(0deg)",
  transition: "all 0.2s ease-out"
}

const activeTopBarStyles: ThemeUICSSObject = {
  ...barStyles,
  transform: "rotateZ(90deg)",
  transition: "all 0.2s ease-out"
}

const activeMiddleBarStyles: ThemeUICSSObject = {
  width: "0px",
  opacity: 0
}

const activeBottomBarStyles: ThemeUICSSObject = {
  ...barStyles,
  transform: "rotateZ(-90deg)",
  transition: "all 0.2s ease-out"
}

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
  return (
    <Button
      onClick={handleActiveState}
      variant="resetStyles"
      sx={{
        width: "32px",
        display: "inline-flex",
        flexDirection: "column"
      }}
    >
      <span sx={activeState ? activeTopBarStyles : barStyles}></span>
      <span sx={activeState ? activeMiddleBarStyles : barStyles}></span>
      <span sx={activeState ? activeBottomBarStyles : barStyles}></span>
    </Button>
  )
}

export default HamburgerButton
