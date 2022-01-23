/** @jsxImportSource theme-ui */
import { Box, Text, Heading, Paragraph } from "theme-ui"
import { ReactNode } from "react"

// Props
export interface ITimelineNode {
  className?: string
  children?: ReactNode | ReactNode[]
  date: string
  achievement?: string
  heading: string
  text?: string
  isLast?: boolean
}

const TimelineNode = ({
  className,
  date,
  achievement,
  heading,
  text,
  isLast
}: ITimelineNode) => {
  return (
    <Box
      className={className}
      sx={{
        position: "relative"
      }}
    >
      {/* Point */}
      <span
        sx={{
          width: "12px",
          height: "12px",
          position: "absolute",
          top: 0,
          // top: isLast ? "unset" : 0,
          // bottom: isLast ? 0 : "unset",
          left: "-24px",
          borderRadius: "50%",
          bg: "black"
        }}
      />
      <Box>
        <Heading as="h5" variant="styles.h5">
          <span
            sx={{
              fontSize: "1rem",
              fontStyle: "italic",
              color: "#3d3d3d"
            }}
          >
            {date} -{" "}
          </span>
          <span
            sx={{
              color: "themePink"
            }}
          >
            {achievement}
          </span>
          {" - "}
          {heading}
        </Heading>
        <Paragraph
          sx={{
            mt: 2
          }}
        >
          {text}
        </Paragraph>
      </Box>
    </Box>
  )
}

export default TimelineNode
