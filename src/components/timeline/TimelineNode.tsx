/** @jsxImportSource theme-ui */
import { Box, Flex, Paragraph } from "theme-ui"
import { ReactNode } from "react"

// Props
export interface ITimelineNode {
  className?: string
  children?: ReactNode | ReactNode[]
  isLast?: boolean
}

const TimelineNode = ({ className, children, isLast }: ITimelineNode) => {
  return (
    <Flex>
      {/* "point" + connecting line */}
      <Flex
        sx={{
          mr: 3,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {/* point */}
        <span
          sx={{
            minWidth: "12px",
            minHeight: "12px",
            borderRadius: "50%",
            bg: "black"
          }}
        />

        {/* line */}
        {!isLast && (
          <span
            sx={{
              width: "4px",
              height: "100%",
              bg: "black"
            }}
          />
        )}
      </Flex>
      {children}
    </Flex>
  )
}

export default TimelineNode
