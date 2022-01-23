/** @jsxImportSource theme-ui */
import { Box, Heading, Text, Paragraph } from "theme-ui"
import { ReactNode } from "react"

// Props
export interface ITimelineEvent {
  className?: string
  children?: ReactNode | ReactNode[]
  startDate: string
  endDate: string
  achievement?: string
  heading: string
  text?: string
  isLast?: boolean
}

const TimelineEvent = ({
  className,
  startDate,
  endDate,
  achievement,
  heading,
  text,
  isLast
}: ITimelineEvent) => {
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
              color: "themePink"
            }}
          >
            {achievement}
          </span>
          {" - "}
          {heading}
        </Heading>
        <Text
          sx={{
            my: 1,
            display: "inline-block",
            fontSize: "1rem",
            fontStyle: "italic",
            fontWeight: 500,
            color: "#3d3d3d"
          }}
        >
          {startDate} - {endDate}
        </Text>
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

export default TimelineEvent
