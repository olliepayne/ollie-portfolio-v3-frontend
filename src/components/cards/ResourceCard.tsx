/** @jsxImportSource theme-ui */
import { Card, Box, Heading, Paragraph, Text } from "theme-ui"
import Link from "next/link"
import Image from "next/image"

export interface IResourceCard {
  className?: string
  thumbnail: {
    src: string
    alt: string
  }
  title: string
  date: string
  preview: string
  url: string
}

const ResourceCard = ({
  className,
  thumbnail,
  title,
  date,
  preview,
  url
}: IResourceCard) => {
  return (
    <Link href={url}>
      <a
        sx={{
          variant: "links.resetStyles"
        }}
      >
        <Card
          className={className}
          sx={{
            p: 4,
            position: "relative",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgb(0 0 0 / 0.3)",
            overflow: "hidden",
            transition: "all 0.5s",
            ":hover": {
              transform: "scale(1.01, 1.01)",
              ".thumbnail-container": {
                width: "102%",
                height: "102%",
                transform: "translate(-1%, -1%)"
              },
              ".overlay": {
                opacity: 0.4
              },
              ".text-content": {
                transform: "scale(0.98, 0.98)"
              }
            }
          }}
        >
          {/* Thumbnail */}
          <Box
            className="thumbnail-container"
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translate(0, 0)",
              transition: "all 0.5s",
              filter: "blur(3px)"
            }}
          >
            <Image
              src={thumbnail.src}
              alt={thumbnail.alt}
              layout="fill"
              objectFit="cover"
            />
          </Box>

          {/* Overlay */}
          <Box
            className="overlay"
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              bg: "black",
              opacity: 0.25,
              transition: "all 0.5s ease-out"
            }}
          ></Box>

          {/* Text content */}
          <Box
            className="text-content"
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 1,
              color: "white",
              transform: "scale(1, 1)",
              transition: "all 0.5s"
            }}
          >
            <Heading
              as="h4"
              variant="styles.h4"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
                overflow: "hidden",
                WebkitLineClamp: 3
              }}
            >
              {title}
            </Heading>
            <Text
              sx={{
                my: 2,
                display: "inline-block"
              }}
            >
              {date}
            </Text>

            <Paragraph
              className="preview"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
                overflow: "hidden",
                WebkitLineClamp: 4
              }}
            >
              {preview}
            </Paragraph>
          </Box>
        </Card>
      </a>
    </Link>
  )
}

export default ResourceCard
