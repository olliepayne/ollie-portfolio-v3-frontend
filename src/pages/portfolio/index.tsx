/** @jsxImportSource theme-ui */
import { NextPage } from "next"

import HeroImage from "components/images/HeroImage"

const PortfolioPage: NextPage = () => {
  return (
    <main>
      <section>
        <HeroImage src="/images/flex-everything.png" alt="CSS code" />
      </section>
    </main>
  )
}

export default PortfolioPage
