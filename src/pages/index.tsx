/** @jsxImportSource theme-ui */
import { ThemeUICSSObject, Box, Container, Heading, Paragraph } from "theme-ui"
import { NextPage } from "next"
import Image from "next/image"

import Timeline from "components/timeline/Timeline"

// Styles
const containerStyles: ThemeUICSSObject = {
  minHeight: "calc(100vh - 77px)",
  py: 5
}

const Homepage: NextPage = () => {
  return (
    <main>
      {/* Hero image */}
      <Box
        sx={{
          width: "100%",
          height: "400px",
          position: "relative"
        }}
      >
        <Image
          src="/images/placeholder.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          loading="eager"
          placeholder="blur"
          blurDataURL="/images/placeholder.jpg"
        />
      </Box>

      {/* First / Home content */}
      <Container id="about" sx={containerStyles}>
        <Box>
          <Heading as="h3" variant="styles.h3">
            Hi
          </Heading>
          <Paragraph
            sx={{
              pl: 3,
              borderLeftWidth: "4px",
              borderLeftStyle: "solid",
              borderLeftColor: "themePink"
            }}
          >
            Lorem Ipsum.
          </Paragraph>
        </Box>
      </Container>

      {/* Experience */}
      <Container id="experience" variant="medium" sx={containerStyles}>
        <Timeline />
      </Container>

      {/* CV */}
      <Container id="cv" variant="medium" sx={containerStyles}></Container>

      {/* Contact */}
      <Box id="contact" sx={containerStyles}></Box>
    </main>
  )
}

export default Homepage
