/** @jsxImportSource theme-ui */
import { Container, Flex, Box, Text } from "theme-ui"
import Link from "next/link"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer
      sx={{
        py: 3
      }}
    >
      <Container variant="small">
        <Flex
          sx={{
            justifyContent: "space-between"
          }}
        >
          <Text
            sx={{
              fontWeight: 500
            }}
          >
            &copy; {currentYear} Ollie Payne
          </Text>

          <Link href={"#"}>
            <a
              sx={{
                variant: "links.resetStyles",
                position: "relative",
                fontWeight: 500,
                "::after": {
                  content: `""`,
                  width: "100%",
                  height: 0,
                  position: "absolute",
                  left: 0,
                  bottom: -1,
                  bg: "themePink",
                  transition: "all 0.2s ease-out"
                },
                ":hover": {
                  "::after": {
                    height: "4px"
                  }
                }
              }}
            >
              Github Repo
            </a>
          </Link>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer
