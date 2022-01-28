/** @jsxImportSource theme-ui */
import { Flex, Box, Heading, Paragraph } from "theme-ui"
import Image from "next/image"

// Props
export interface IAboutMeBlock {
  className?: string
  heading: string
  headingSide: "LEFT" | "RIGHT"
  text: string
  image: {
    src: string
    alt: string
  }
}

const AboutMeBlock = ({
  className,
  heading,
  headingSide,
  text,
  image
}: IAboutMeBlock) => {
  return (
    <Flex
      className={className}
      sx={{
        px: 3,
        py: 5,
        position: "relative",
        justifyContent: "space-between",
        color: "white",
        overflow: "hidden",
        ":hover": {
          ".background-image": {
            transform: "scale(1.01, 1.01)"
          }
        }
      }}
    >
      {/* Background image */}
      <Box
        className="background-image"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "all 0.3s ease-out",
          "::after": {
            content: `""`,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            bg: "rgb(0 0 0 / 0.45)",
            backdropFilter: "blur(2px)"
          }
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </Box>

      {headingSide === "LEFT" && (
        <Heading
          as="h4"
          variant="styles.h4"
          sx={{
            maxWidth: "25%",
            pr: 3,
            mr: 3,
            position: "relative",
            zIndex: 1,
            borderRightWidth: "4px",
            borderRightStyle: "solid",
            borderRightColor: "themePink"
          }}
        >
          {heading}
        </Heading>
      )}

      <Paragraph
        sx={{
          position: "relative",
          zIndex: 1
        }}
      >
        {text}
      </Paragraph>

      {headingSide === "RIGHT" && (
        <Heading
          as="h4"
          variant="styles.h4"
          sx={{
            maxWidth: "25%",
            pl: 3,
            ml: 3,
            position: "relative",
            zIndex: 1,
            borderLeftWidth: "4px",
            borderLeftStyle: "solid",
            borderLeftColor: "themePink"
          }}
        >
          {heading}
        </Heading>
      )}
    </Flex>
  )
}

export default AboutMeBlock
