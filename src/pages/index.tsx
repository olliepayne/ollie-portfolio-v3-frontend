/** @jsxImportSource theme-ui */
import { Box, Container } from "theme-ui"
import Image from "next/image"

import { NextPage } from "next"

const Homepage: NextPage = () => {
  return (
    <main>
      <Box
        sx={{
          width: "100%",
          height: "400px",
          position: "relative"
        }}
      >
        <Image
          src="/images/placeholder.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Container></Container>
    </main>
  )
}

export default Homepage
