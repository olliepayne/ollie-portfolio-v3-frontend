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

import ScrollProgress from "components/ScrollProgress"
import HeroImage from "components/images/HeroImage"
import FakeRegion from "components/layout/FakeRegion"
import RegionHeading from "components/text/RegionHeading"
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
    institutionName: "Prescott High School",
    description: ""
  }
]

const workTimelineNodes: ITimelineEvent[] = [
  {
    startDate: "Apr. 2019",
    endDate: "Jun. 2021",
    achievement: "Floor Staff",
    institutionName: "Gripstone Climbing Gym",
    description:
      "Gained fitness knowledge, watched over patrons to ensure safety and proper practices, and set routes -- all under the mentorship of a former professional climber."
  }
  // {
  //   startDate: "Mar. 2021",
  //   endDate: "Sep. 2021",
  //   achievement: "Front End Developer (Intern)",
  //   heading: "First development job, at med-tech startup Kasadia",
  //   description:
  //     "Worked with company founder and migrated existing marketing site from vanilla HTML, CSS, and JavaScript, into the React based framework Next.js."
  // },
  // {
  //   startDate: "Jun. 2021",
  //   endDate: "Oct. 2021",
  //   achievement: "Software Developer (Intern)",
  //   heading: "Started paid internship at Eightfold Technology",
  //   description: `Worked on 5 projects (websites and web apps) as a solo and as part of a small development team. Used modern front end technologies such as React, Next, Gatsby, and TypeScript.
  //     Learned about E-Commerce solutions and worked directly with Shopify, on two stores and theme developments. Worked extensively with the CMS Strapi.js.`
  // },
  // {
  //   startDate: "Oct. 2021",
  //   endDate: "Jan. 2022",
  //   achievement: "Jr Developer",
  //   heading: "Accepted Full Time position at Eightfold Technology",
  //   description: `Worked on 5 projects (websites and web apps) as a solo and as part of a small development team. Used modern front end technologies such as React, Next, Gatsby, and TypeScript.
  //     Learned about E-Commerce solutions and worked directly with Shopify, on two stores and theme developments. Worked extensively with the CMS Strapi.js.`
  // }
]

const technicalSkills = [
  "TypeScript",
  "React.js",
  "Gatsby.js",
  "Next.js",
  "Shopify",
  "Strapi.js",
  "HTML",
  "CSS",
  "JavaScript"
]

// Strapi
// export const getStaticProps = async () => {
//   const timelineEvents = getTimelineEvents()

//   return {
//     props: {
//       timelineEvents
//     }
//   }
// }

const Homepage: NextPage = (props) => {
  // console.log(props)

  return (
    <main>
      <ScrollProgress
        sx={{
          position: "fixed",
          top: ["92px", "84px"],
          zIndex: 999
        }}
      />

      <section>
        <HeroImage
          src="/images/park-city.png"
          alt="man sitting next to bear statue"
          objectPosition="center -1000px"
        />
      </section>

      {/* First / Home content */}
      <section
        sx={{
          my: 6,
          position: "relative"
        }}
      >
        <FakeRegion id="about" />

        <Container>
          <RegionHeading
            to="#about"
            as="h2"
            variant="styles.h2"
            sx={{
              textDecoration: "underline"
            }}
          >
            About me.
          </RegionHeading>
        </Container>
        <Container variant="medium">
          <Flex
            sx={{
              my: 4,
              flexDirection: "column"
            }}
          >
            <Flex
              sx={{
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
                Early Life.
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
                calisthenics movements and rock climbing goals. My current
                fitness goals are completing my first 5.14 graded sport climb,
                competing in my first round of USA climbing competitions, and
                doing a hand stand.
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
                Current Life.
              </Heading>
            </Flex>
            <Flex
              sx={{
                alignSelf: "flex-start",
                alignItems: "center"
              }}
            >
              <Heading as="h3" variant="styles.h3">
                Future Goals.
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

        <Box
          sx={{
            py: 4,
            bg: "almostWhite"
          }}
        >
          <Container>
            <Heading
              as="h4"
              variant="styles.h4"
              sx={{
                textAlign: "center"
              }}
            >
              Technical skills.
            </Heading>
            <Flex
              as="ul"
              sx={{
                p: 0,
                mt: 4,
                flexWrap: "wrap",
                justifyContent: "center",
                listStyle: "none",
                li: {
                  mb: 2
                }
              }}
            >
              {technicalSkills.map((technicalSkill, index) => (
                <li key={`technical-skill:${index}`}>
                  <Text
                    sx={{
                      fontSize: ["1.125rem", "1.125rem"],
                      fontWeight: 500,
                      fontStyle: "italic"
                    }}
                  >
                    {technicalSkill}
                  </Text>
                  {index !== technicalSkills.length - 1 && (
                    <Text
                      sx={{
                        mx: 2,
                        fontSize: ["1.125rem", "1.125rem"],
                        fontWeight: 500
                      }}
                    >
                      &#8226;
                    </Text>
                  )}
                </li>
              ))}
            </Flex>
          </Container>
        </Box>
      </section>

      {/* Experience */}
      <section
        sx={{
          my: 6,
          position: "relative"
        }}
      >
        <FakeRegion id="experience" />

        <Container>
          <RegionHeading
            to="experience"
            as="h2"
            variant="styles.h2"
            sx={{
              textDecoration: "underline"
            }}
          >
            Experience.
          </RegionHeading>
        </Container>

        <Container variant="medium">
          <Box
            sx={{
              mt: 4
            }}
          >
            <Heading as="h3" variant="styles.h3">
              Education.
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
              Work.
            </Heading>
            <Timeline
              nodes={workTimelineNodes}
              sx={{
                mt: 3
              }}
            />
          </Box>
        </Container>
      </section>

      {/* Contact */}
      <section
        sx={{
          py: 6,
          bg: "#fff5e8",
          position: "relative"
        }}
      >
        <FakeRegion id="contact" />

        <Container>
          <Flex
            sx={{
              width: "100%",
              justifyContent: "space-between"
            }}
          >
            <RegionHeading
              to="contact"
              as="h2"
              variant="styles.h2"
              sx={{
                textDecoration: "underline"
              }}
            >
              Get in touch.
            </RegionHeading>

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
        </Container>
      </section>
    </main>
  )
}

export default Homepage
