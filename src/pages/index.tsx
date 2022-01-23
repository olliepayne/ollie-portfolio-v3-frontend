/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Paragraph } from "theme-ui"
import Image from "next/image"

import { NextPage } from "next"

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

      <Container>
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
    </main>
  )
}

export default Homepage
