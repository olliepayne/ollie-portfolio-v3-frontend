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
        top: "-77px",
        left: 0
      }}
    />
  )
}

export default FakeRegion
