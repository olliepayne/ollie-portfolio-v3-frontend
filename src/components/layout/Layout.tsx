/** @jsxImportSource theme-ui */
import { ReactNode } from "react"

import Header from "components/header/Header"

// Props
export interface ILayout {
  children?: ReactNode | ReactNode[]
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
