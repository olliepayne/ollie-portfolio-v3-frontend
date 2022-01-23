/** @jsxImportSource theme-ui */
import { Flex, Box, Heading, Paragraph } from "theme-ui"

import TimelineNode, { ITimelineNode } from "components/timeline/TimelineNode"

// Data
const timelineNodes: ITimelineNode[] = [
  {
    date: "4/4/2019",
    heading:
      "Began Floor Staff position at Gripstone Climbing in Prescott, AZ.",
    text: "Lorem Ipsum Dolor Sit."
  },
  {
    date: "6/28/2021",
    heading: "Started paid internship at Eightfold Technology",
    text: "Lorem Ipsum Dolor Sit."
  }
]

// Props
export interface ITimeline {
  className?: string
}

const Timeline = ({ className }: ITimeline) => {
  return (
    <Box
      className={className}
      sx={{
        pl: 3,
        borderLeft: "4px solid black"
      }}
    >
      {timelineNodes.map((node, index) => (
        <TimelineNode {...node} isLast={index === timelineNodes.length - 1} />
      ))}
    </Box>
  )
}

export default Timeline
