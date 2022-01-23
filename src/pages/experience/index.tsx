/** @jsxImportSource theme-ui */
import { Container } from "theme-ui"
import { NextPage } from "next"

import Timeline from "components/timeline/Timeline"

const ExperiencePage: NextPage = () => {
  return (
    <main>
      <Container variant="medium">
        <Timeline />
      </Container>
    </main>
  )
}

export default ExperiencePage
