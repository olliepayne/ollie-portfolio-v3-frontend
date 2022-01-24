import { ThemeProvider } from "@theme-ui/core"
import theme from "config/theme"
import type { AppProps } from "next/app"
import "../../public/global.css"

import Layout from "components/layout/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
