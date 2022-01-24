/** @jsxImportSource theme-ui */
import {
  ThemeUICSSObject,
  Box,
  Container,
  Heading,
  Paragraph,
  Flex,
  Text
} from "theme-ui"
import { NextPage } from "next"
import Image from "next/image"

import FakeRegion from "components/layout/FakeRegion"
import Timeline from "components/timeline/Timeline"

import { ITimelineEvent } from "components/timeline/TimelineEvent"

// Data
const technologyImages = [
  {
    src: "/images/typescript.png",
    alt: "TypeScript logo"
  },
  {
    src: "/images/react-logo.png",
    alt: "React.js logo"
  },
  {
    src: "/images/next.png",
    alt: "Next.js logo"
  },
  {
    src: "/images/gatsby.png",
    alt: "Gatsby.js logo"
  },
  {
    src: "/images/shopify-logo.png",
    alt: "Shopify logo"
  }
]

const educationTimelineNodes: ITimelineEvent[] = [
  {
    startDate: "Aug. 2015",
    endDate: "Jan. 2019",
    achievement: "Highschool Diploma",
    heading: "Graduated, a semester early, from Prescott High School"
  },
  {
    startDate: "Feb. 2022",
    endDate: "May. 2022",
    achievement: "Google UI / UX Certificate",
    heading: "Lorem Ipsum."
  },
]

const workTimelineNodes: ITimelineEvent[] = [
  {
    startDate: "Apr. 2019",
    endDate: "Jun. 2021",
    achievement: "Floor Staff",
    heading:
      "Began first job at the age of 17, at Gripstone Climbing Gym in Prescott, AZ.",
    text: "Gained fitness knowledge, watched over patrons to ensure safety and proper practices, and set routes -- all under the mentorship of a former professional climber."
  },
  {
    startDate: "Mar. 2021",
    endDate: "Sep. 2021",
    achievement: "Front End Developer (Intern)",
    heading:
      "First development job, at med-tech startup Kasadia",
    text: "Worked with company founder and migrated existing marketing site from vanilla HTML, CSS, and JavaScript, into the React based framework Next.js."
  },
  {
    startDate: "Jun. 2021",
    endDate: "Jan. 2022",
    achievement: "Software Developer (Intern)",
    heading: "Started paid internship at Eightfold Technology",
    text: `Worked on 5 projects (websites and web apps) as a solo and as part of a small development team. Used modern front end technologies such as React, Next, Gatsby, and TypeScript. 
      Learned about E-Commerce solutions and worked directly with Shopify, on two stores and theme developments. Worked extensively with the CMS Strapi.js.`
  },
]

// Styles
const sectionContainerStyles: ThemeUICSSObject = {
  // minHeight: "calc(100vh - 77px)",
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
          height: "500px",
          position: "relative"
        }}
      >
        <Image
          src="/images/climbing-1.png"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="eager"
          placeholder="blur"
          blurDataURL="/images/climbing-1.png"
        />
      </Box>

      {/* First / Home content */}
      <Box>
        <Container
          sx={{
            py: 4,
            position: "relative"
          }}
        >
          <FakeRegion id="about" />

          <Heading as="h2" variant="styles.h2">
            About me.
          </Heading>
        </Container>
        <Container variant="medium">
          <Flex
            sx={{
              mt: 4,
              flexDirection: "column"
            }}
          >
            <Flex
              sx={{
                my: 4,
                alignSelf: "flex-start",
                alignItems: "center"
              }}
            >
              <Heading
                as="h3"
                variant="styles.h3"
                sx={{
                  pr: 3,
                  mr: 3,
                  borderRightWidth: "4px",
                  borderRightStyle: "solid",
                  borderRightColor: "themePink"
                }}
              >
                Early Life
              </Heading>
              <Paragraph>
                Born in Telford, England, on July 23 2001. Moved to Arizona in
                the summer of 2009 at the age of 7, along with both parents and
                sister.
              </Paragraph>
            </Flex>
            <Flex
              sx={{
                my: 4,
                alignSelf: "flex-end",
                alignItems: "center"
              }}
            >
              <Paragraph>
                Working out of Prescott, AZ, while also training for
                calisthenics movements and rock climbing goals.
              </Paragraph>
              <Heading
                as="h3"
                variant="styles.h3"
                sx={{
                  pl: 3,
                  ml: 3,
                  borderLeftWidth: "4px",
                  borderLeftStyle: "solid",
                  borderLeftColor: "themePink"
                }}
              >
                Current Life
              </Heading>
            </Flex>
            <Flex
              sx={{
                my: 4,
                alignSelf: "flex-start",
                alignItems: "center"
              }}
            >
              <Heading as="h3" variant="styles.h3">
                Future Goals
              </Heading>
              <ul
                sx={{
                  pr: 3,
                  ml: 3,
                  borderLeftWidth: "4px",
                  borderLeftStyle: "solid",
                  borderLeftColor: "themePink"
                }}
              >
                <li>
                  <Text>Compete my in first USA Climbing competition</Text>
                </li>
                <li>
                  <Text>Pass my current investment goal</Text>
                </li>
                <li>
                  <Text>Complete a 5.14 rated lead climb</Text>
                </li>
                <li>
                  <Text>Complete a V11 rated boulder</Text>
                </li>
                <li>
                  <Text>Start a business</Text>
                </li>
              </ul>
            </Flex>
          </Flex>
        </Container>

        <Container>
          <Heading as="h3" variant="styles.h3">
            Diverse skillset.
          </Heading>
        </Container>
        <Container
          variant="medium"
          sx={{
            my: 5
          }}
        >
          <Flex
            as="ul"
            sx={{
              width: "100%",
              p: 0,
              my: 4,
              flexWrap: "wrap",
              justifyContent: "center",
              listStyle: "none",
              li: {
                mb: 4,
                ":not(:last-of-type)": {
                  mr: 4
                }
              }
            }}
          >
            {technologyImages.map(({ src, alt }, index) => (
              <li key={`technology-image:${index}`}>
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    position: "relative"
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </li>
            ))}
          </Flex>
          <Paragraph>Technical skills include:</Paragraph>
          <ul
            sx={{
              p: 0,
              m: 0,
              listStyle: "none"
            }}
          >
            <li>
              <Text>TypeScript and JavaScript</Text>
            </li>
            <li>
              <Text>React.js</Text>
            </li>
            <li>
              <Text>Gatsby.js</Text>
            </li>
            <li>
              <Text>Next.js</Text>
            </li>
            <li>
              <Text>Shopify</Text>
            </li>
          </ul>
        </Container>
      </Box>

      {/* Experience */}
      <Container variant="medium" sx={sectionContainerStyles}>
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
      {/* <Container variant="medium" sx={sectionContainerStyles}>
        <FakeRegion id="cv" />
      </Container> */}

      {/* Contact */}
      <Box
        sx={{
          bg: "#fff5e8"
        }}
      >
        <Container sx={sectionContainerStyles}>
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
