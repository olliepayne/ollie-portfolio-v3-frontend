import * as React from "react"

export interface IWithChildren {
  children?: React.ReactNode | React.ReactNode[]
}

export interface IMyLink {
  text: string
  url: string
}
