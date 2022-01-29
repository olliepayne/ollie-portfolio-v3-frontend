/** @jsxImportSource theme-ui */
import { Box, Container, Flex } from "theme-ui"

import { IWithChildren } from "config/myTypes"

// Props
export interface IHeroSection extends IWithChildren {
  className?: string
}

const HeroSection = ({ className, children }: IHeroSection) => {
  return (
    <section>
      <Box
        sx={{
          height: "600px",
          background: "linear-gradient(360deg, #FFFFFF 0%, #ff94b1 40%)"
        }}
      >
        {children}
      </Box>
    </section>
  )
}

export default HeroSection
