/** @jsxImportSource theme-ui */
import { Box, Heading, Paragraph } from "theme-ui"

import TimelineNode from "components/timeline/TimelineNode"

// PLACEHOLDER DATA

// Props
export interface ITimeline {
  className?: string
}

const Timeline = ({ className }: ITimeline) => {
  return (
    <Box>
      <TimelineNode>
        <Box
          sx={{
            py: 4
          }}
        >
          <Heading as="h5" variant="styles.h5">
            4/4/19 - Began Floor Staff position at Gripstone Climbing in
            Prescott, AZ.
          </Heading>
          <Paragraph>Lorem Ipsum Dolor Sit.</Paragraph>
        </Box>
      </TimelineNode>
      <TimelineNode>
        <Box
          sx={{
            py: 4
          }}
        >
          <Heading as="h5" variant="styles.h5">
            6/28/21 - Began paid internship with Eightfold Technology.
          </Heading>
          <Paragraph>Lorem Ipsum Dolor Sit.</Paragraph>
        </Box>
      </TimelineNode>
      <TimelineNode isLast>
        <Box
          sx={{
            py: 4
          }}
        >
          <Heading as="h5" variant="styles.h5">
            1/24/22 - Accepted Full Time Jr Developer position with Eightfold
            Technology.
          </Heading>
          <Paragraph>Lorem Ipsum Dolor Sit.</Paragraph>
        </Box>
      </TimelineNode>
    </Box>
  )
}

export default Timeline
