/** @jsxImportSource theme-ui */
import { Heading, HeadingProps } from "theme-ui"
import Link from "next/link"

// Props
export interface IRegionHeading extends HeadingProps {
  to: string
}

const RegionHeading = ({ to, children, ...props }: IRegionHeading) => {
  return (
    <Link href={to}>
      <a
        sx={{
          variant: "links.resetStyles"
        }}
      >
        <Heading
          {...props}
          sx={{
            "::after": {
              content: `" #"`,
              fontStyle: "italic",
              opacity: 0,
              transition: "all 0.2s ease-out"
            },
            ":hover": {
              "::after": {
                fontStyle: "italic",
                opacity: 1
              }
            }
          }}
        >
          {children}
        </Heading>
      </a>
    </Link>
  )
}

export default RegionHeading
