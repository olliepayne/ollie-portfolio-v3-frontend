/** @jsxImportSource theme-ui */
import { Box, Text, Heading, Paragraph } from "theme-ui"
import { ReactNode } from "react"

// Props
export interface ITimelineNode {
  className?: string
  children?: ReactNode | ReactNode[]
  date: string
  heading: string
  text: string
  isLast?: boolean
}

const TimelineNode = ({
  className,
  date,
  heading,
  text,
  isLast
}: ITimelineNode) => {
  return (
    <Box
      sx={{
        position: "relative"
      }}
    >
      {/* point */}
      <span
        sx={{
          minWidth: "12px",
          minHeight: "12px",
          position: "absolute",
          top: 0,
          // top: isLast ? "unset" : 0,
          // bottom: isLast ? 0 : "unset",
          left: "-24px",
          borderRadius: "50%",
          bg: "black"
        }}
      />
      <Box
        sx={{
          py: 4
        }}
      >
        <Heading as="h5" variant="styles.h5">
          <span
            sx={{
              fontStyle: "italic"
            }}
          >
            {date} -{" "}
          </span>
          {heading}
        </Heading>
        <Paragraph>{text}</Paragraph>
      </Box>
    </Box>
  )
}

export default TimelineNode
