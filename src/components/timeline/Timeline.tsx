/** @jsxImportSource theme-ui */
import { Box } from "theme-ui"

import TimelineNode, { ITimelineNode } from "components/timeline/TimelineNode"

// Props
export interface ITimeline {
  className?: string
  nodes: ITimelineNode[]
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
        <TimelineNode
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
