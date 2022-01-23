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
        borderLeft: "4px solid black"
      }}
    >
      {nodes.map((node, index) => (
        <TimelineEvent
          {...node}
          isLast={index === nodes.length - 1}
          sx={{
            pb: 4
          }}
        />
      ))}
    </Box>
  )
}

export default Timeline
