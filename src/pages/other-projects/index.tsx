/** @jsxImportSource theme-ui */
import { Container, Heading, Grid } from "theme-ui"
import { NextPage } from "next"

import ResourceCard, { IResourceCard } from "components/cards/ResourceCard"

// Data
const otherProjects: IResourceCard[] = [
  {
    thumbnail: {
      src: "/images/headshot-1.png",
      alt: "me"
    },
    title: "Climbing a 5.14",
    date: "1/23/2022",
    preview: "Lorem Ipsum Dolor Sit. Testing testing testing testing testing",
    url: "#"
  },
  {
    thumbnail: {
      src: "/images/placeholder.jpg",
      alt: "mountains"
    },
    title: "First Competitive Competition",
    date: "2/26/2022",
    preview: "Lorem Ipsum Dolor Sit. Testing testing testing testing testing",
    url: "#"
  },
  {
    thumbnail: {
      src: "/images/5.13-plus.png",
      alt: "mountains"
    },
    title: "Second 5.13+",
    date: "7/1/2021",
    preview:
      "After completing this far quicker than expected, my fitness proved itself after 3 months of work on this killer route.",
    url: "#"
  }
]

const OtherProjectsPage: NextPage = () => {
  return (
    <main>
      <Container>
        <Heading as="h3" variant="styles.h3">
          Fitness & Rock Climbing
        </Heading>
        <Grid
          as="ul"
          sx={{
            p: 0,
            my: 3,
            gridTemplateColumns: "repeat(2, 1fr)",
            listStyle: "none"
          }}
        >
          {otherProjects.map((otherProject, index) => (
            <li key={`other-project:${index}`}>
              <ResourceCard
                {...otherProject}
                sx={{
                  width: "100%",
                  height: "250px"
                }}
              />
            </li>
          ))}
        </Grid>
      </Container>
    </main>
  )
}

export default OtherProjectsPage
