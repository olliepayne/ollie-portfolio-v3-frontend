/** @jsxImportSource theme-ui */
import {
  ThemeUICSSObject,
  Box,
  Container,
  Heading,
  Paragraph,
  Flex
} from "theme-ui"
import { NextPage } from "next"
import Image from "next/image"

import FakeRegion from "components/layout/FakeRegion"
import Timeline from "components/timeline/Timeline"

// Styles
const containerStyles: ThemeUICSSObject = {
  minHeight: "calc(100vh - 77px)",
  py: 5,
  position: "relative"
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
      <Container sx={containerStyles}>
        <FakeRegion id="about" />

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

        <Container
          variant="small"
          sx={{
            my: 5
          }}
        >
          <Flex
            as="ul"
            sx={{
              width: "100%",
              p: 0,
              m: 0,
              flexWrap: "wrap",
              justifyContent: "center",
              listStyle: "none"
            }}
          >
            <li>
              <Box
                sx={{
                  maxWidth: "100px",
                  position: "relative"
                }}
              >
                <Image
                  src="/images/typescript.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </li>
            <li>
              <Box
                sx={{
                  maxWidth: "100px",
                  position: "relative"
                }}
              >
                <Image
                  src="/images/react.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </li>
            <li>
              <Box
                sx={{
                  maxWidth: "100px",
                  position: "relative"
                }}
              >
                <Image
                  src="/images/next.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </li>
            <li>
              <Box
                sx={{
                  maxWidth: "100px",
                  position: "relative"
                }}
              >
                <Image
                  src="/images/gatsby.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </li>
          </Flex>
        </Container>
      </Container>

      {/* Experience */}
      <Container variant="medium" sx={containerStyles}>
        <FakeRegion id="experience" />

        <Timeline />
      </Container>

      {/* CV */}
      <Container variant="medium" sx={containerStyles}>
        <FakeRegion id="cv" />
      </Container>

      {/* Contact */}
      <Box sx={containerStyles}>
        <FakeRegion id="contact" />
      </Box>
    </main>
  )
}

export default Homepage
