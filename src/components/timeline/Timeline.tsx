/** @jsxImportSource theme-ui */
import { Box } from "theme-ui"

import TimelineEvent, {
  ITimelineEvent
} from "components/timeline/TimelineEvent"

// Props
export interface ITimeline {
  className?: string
  nodes: ITimelineEvent[]
}

const Timeline = ({ className, nodes }: ITimeline) => {
  return (
    <Box
      className={className}
      sx={{
        pl: 3,
        borderLeft: "2px solid black",
        ".timeline-event:not(:first-of-type)": {
          mt: 5
        }
      }}
    >
      {nodes.map((node, index) => (
        <TimelineEvent
          {...node}
          key={`timemline-event:${index}`}
          className="timeline-event"
        />
      ))}
    </Box>
  )
}

export default Timeline
