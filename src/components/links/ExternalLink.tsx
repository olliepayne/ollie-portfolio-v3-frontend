/** @jsxImportSource theme-ui */

import { IWithChildren } from "config/myTypes"

// Props
export interface IExternalLink extends IWithChildren {
  className?: string
  url: string
}

const ExternalLink = ({ className, children, url }: IExternalLink) => {
  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="nofollower noreferrer noopener"
      sx={{
        variant: "links.resetStyles"
      }}
    >
      {children}
    </a>
  )
}

export default ExternalLink
