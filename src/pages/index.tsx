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

import { ITimelineNode } from "components/timeline/TimelineNode"

// Data
const educationTimelineNodes: ITimelineNode[] = [
  {
    date: "1/1/2019",
    achievement: "Highschool Diploma",
    heading: "Graduated, a semester early, from Prescott High School"
  }
]

const workTimelineNodes: ITimelineNode[] = [
  {
    date: "4/4/2019",
    achievement: "Floor Staff",
    heading:
      "Began first job at the age of 17, at Gripstone Climbing in Prescott, AZ.",
    text: "Gained fitness knowledge, watched over patrons to ensure safety and proper practices, and set routes -- all under the mentorship of a former professional climber."
  },
  {
    date: "6/28/2021",
    achievement: "Intern",
    heading: "Started paid internship at Eightfold Technology",
    text: "Worked on 5 projects (websites and web apps) as a solo and as part of a small development team. Used modern front end technologies such as React, Next, Gatsby, and TypeScript."
  }
]

// Styles
const containerStyles: ThemeUICSSObject = {
  minHeight: "calc(100vh - 77px)",
  py: 4,
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

        <Box>
          <Heading as="h3" variant="styles.h3">
            Education
          </Heading>
          <Timeline
            nodes={educationTimelineNodes}
            sx={{
              mt: 3
            }}
          />
        </Box>

        <Box
          sx={{
            mt: 5
          }}
        >
          <Heading as="h3" variant="styles.h3">
            Work
          </Heading>
          <Timeline
            nodes={workTimelineNodes}
            sx={{
              mt: 3
            }}
          />
        </Box>
      </Container>

      {/* Resume */}
      {/* <Container variant="medium" sx={containerStyles}>
        <FakeRegion id="cv" />
      </Container> */}

      {/* Contact */}
      <Box>
        <Container sx={containerStyles}>
          <FakeRegion id="contact" />

          <Flex
            sx={{
              width: "100%",
              justifyContent: "space-between"
            }}
          >
            <Heading
              as="h2"
              variant="styles.h2"
              sx={{
                textDecoration: "underline"
              }}
            >
              Get in touch.
            </Heading>

            {/* Avatar */}
            <Box
              sx={{
                width: "200px",
                height: "200px",
                position: "relative",
                borderRadius: "50%",
                overflow: "hidden",
                borderWidth: "4px",
                borderStyle: "solid",
                borderColor: "themePink"
              }}
            >
              <Image
                src="/images/headshot-1.png"
                alt="ollie payne headshot"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Flex>
          <ul></ul>
        </Container>
      </Box>
    </main>
  )
}

export default Homepage
