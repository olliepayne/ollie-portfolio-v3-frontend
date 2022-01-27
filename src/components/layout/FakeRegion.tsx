/** @jsxImportSource theme-ui */

// Props
export interface IFakeRegion {
  id: string
}

const FakeRegion = ({ id }: IFakeRegion) => {
  return (
    <span
      id={id}
      sx={{
        position: "absolute",
        top: ["94px", "-86px"],
        left: 0
      }}
    />
  )
}

export default FakeRegion
