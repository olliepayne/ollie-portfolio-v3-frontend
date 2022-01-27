/** @jsxImportSource theme-ui */
import { Box, Heading, Text, Paragraph } from "theme-ui"
import { ReactNode } from "react"

// Props
export interface ITimelineEvent {
  className?: string
  children?: ReactNode | ReactNode[]
  startDate: string
  endDate?: string
  achievement: string
  institutionName: string
  description: string
  isLast?: boolean
}

const TimelineEvent = ({
  className,
  startDate,
  endDate,
  achievement,
  institutionName,
  description,
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
          width: "8px",
          height: "8px",
          boxSizing: "content-box",
          position: "absolute",
          top: 0,
          left: "-25px",
          borderRadius: "50%",
          bg: "black",
          border: "4px solid white"
        }}
      />
      <Box>
        <Heading
          as="h5"
          variant="styles.h5"
          sx={{
            color: "themePink"
          }}
        >
          {achievement}
          <span
            sx={{
              color: "black"
            }}
          >
            {" "}
            - {institutionName}
          </span>
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
          {startDate} - {endDate ? endDate : "Present"}
        </Text>
        <Paragraph
          sx={{
            mt: 2
          }}
        >
          {description}
        </Paragraph>
      </Box>
    </Box>
  )
}

export default TimelineEvent
