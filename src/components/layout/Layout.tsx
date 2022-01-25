/** @jsxImportSource theme-ui */
import { ReactNode } from "react"

import Header from "components/header/Header"
import Footer from "components/footer/Footer"

// Props
export interface ILayout {
  children?: ReactNode | ReactNode[]
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
