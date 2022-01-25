/** @jsxImportSource theme-ui */
import { Box } from "theme-ui"
import Image from "next/image"

// Props
export interface IHeroImage {
  src: string
  alt: string
  objectPosition?: string
}

const HeroImage = ({ src, alt, objectPosition }: IHeroImage) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        position: "relative"
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition={objectPosition}
        loading="eager"
        placeholder="blur"
        blurDataURL={src}
      />
      <span
        sx={{
          width: "100%",
          height: "100%",
          bg: "rgb(0 0 0 / 0.35)",
          position: "absolute",
          top: 0,
          left: 0
        }}
      />
    </Box>
  )
}

export default HeroImage
