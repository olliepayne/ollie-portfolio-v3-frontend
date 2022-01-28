/** @jsxImportSource theme-ui */
import {
  ThemeUICSSObject,
  Box,
  Container,
  Heading,
  Paragraph,
  Flex,
  Text,
  Card
} from "theme-ui"
import { NextPage } from "next"
import Image from "next/image"

import ScrollProgress from "components/ScrollProgress"
import HeroImage from "components/images/HeroImage"
import FakeRegion from "components/layout/FakeRegion"
import RegionHeading from "components/text/RegionHeading"
import Timeline from "components/timeline/Timeline"

import { ITimelineEvent } from "components/timeline/TimelineEvent"
import { IMyLink } from "config/myTypes"
import ExternalLink from "components/links/ExternalLink"
import AboutMeBlock from "components/homepage/AboutMeBlock"

// Data
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Gatsby.js",
  "Next.js",
  "Strapi.js",
  "Shopify",
  "Liquid"
]

const contactLinks: IMyLink[] = [
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/oliverpayne01/"
  },
  {
    text: "Email",
    url: "mailto:olliepayne@me.com"
  }
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
          top: ["60px", "68px"],
          zIndex: 9
        }}
      />

      <section>
        <Box
          sx={{
            height: "600px",
            background: "linear-gradient(45deg, #4f74db, #ff94b1)"
          }}
        >
          <Container
            sx={{
              height: "100%"
            }}
          >
            <Flex
              sx={{
                height: "100%",
                alignItems: "center"
              }}
            ></Flex>
          </Container>
        </Box>
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
              mt: 4,
              flexDirection: "column"
            }}
          >
            <AboutMeBlock
              heading="Early Life."
              headingSide="LEFT"
              text="Born in Telford, England, on July 23 2001. Moved to Arizona in the summer of 2009 at the age of 7, along with both parents and sister."
              image={{
                src: "/images/iron-bridge-telford.jpeg",
                alt: ""
              }}
            />
            <AboutMeBlock
              heading="Current Life."
              headingSide="RIGHT"
              text="Working out of Prescott, AZ, while also training for
                calisthenics movements and rock climbing goals. My current
                fitness goals are completing my first 5.14 graded sport climb,
                competing in my first round of USA climbing competitions, and
                doing a hand stand."
              image={{
                src: "/images/climbing-1.png",
                alt: ""
              }}
              sx={{
                my: 4
              }}
            />
            <AboutMeBlock
              heading="Future goals."
              headingSide="LEFT"
              text=""
              image={{
                src: "/images/placeholder.jpg",
                alt: ""
              }}
            />
          </Flex>
        </Container>

        <Box
          sx={{
            py: 4,
            mt: 6,
            bg: "almostWhite"
          }}
        >
          <Container variant="medium">
            <Heading
              as="h3"
              variant="styles.h3"
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
                  mb: 2,
                  ":not(:last-of-type)": {
                    mr: 4
                  }
                }
              }}
            >
              {technicalSkills.map((technicalSkill, index) => (
                <li key={`technical-skill:${index}`}>
                  <Text
                    sx={{
                      fontSize: ["1.125rem", "1.125rem"],
                      fontWeight: 500
                      // color: ""
                    }}
                  >
                    {technicalSkill}
                  </Text>
                  {/* {index !== technicalSkills.length - 1 && (
                    <Text
                      sx={{
                        mx: 2,
                        fontSize: ["1.125rem", "1.125rem"],
                        fontWeight: 500
                      }}
                    >
                      &#8226;
                    </Text>
                  )} */}
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
          bg: "themeCream",
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
            <Box
              sx={{
                flex: "1 1 100%"
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
              <Card
                sx={{
                  width: "50%",
                  p: [3, 4],
                  ml: 3,
                  mt: 4,
                  bg: "themePebble",
                  boxShadow: "10px 10px #ff94b1",
                  transition: "all 0.3s ease-out",
                  ":hover": {
                    boxShadow: "30px 30px #C4C4C4",
                    transform: "perspective(800px) translate(-10px, -10px)"
                  }
                }}
              >
                <Flex
                  as="ul"
                  sx={{
                    listStyle: "none",
                    "li:not(:last-of-type)": {
                      mr: 4
                    }
                  }}
                >
                  {contactLinks.map(({ text, url }, index) => (
                    <li key={`contact-link:${index}`}>
                      <ExternalLink url={url}>
                        <Heading
                          as="h5"
                          variant="styles.h5"
                          sx={{
                            color: "white"
                          }}
                        >
                          {text}
                        </Heading>
                      </ExternalLink>
                    </li>
                  ))}
                </Flex>
              </Card>
            </Box>

            {/* Avatar */}
            <Box
              sx={{
                // width: ["150px", "200px"],
                height: ["150px", "200px"],
                flex: ["1 0 150px", "1 0 200px"],
                position: "relative",
                borderRadius: "50%",
                overflow: "hidden"
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
