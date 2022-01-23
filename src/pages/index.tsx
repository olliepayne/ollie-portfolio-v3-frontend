/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Paragraph } from "theme-ui"
import { NextPage } from "next"
import Image from "next/image"

import Timeline from "components/timeline/Timeline"

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

      <Container id="experience">
        <Box
          sx={{
            my: 4
          }}
        >
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
      <Container variant="medium">
        <Timeline />
      </Container>

      {/* Contact */}
      <Box id="contact"></Box>
    </main>
  )
}

export default Homepage
