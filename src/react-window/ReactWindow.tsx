import { VariableSizeGrid as Grid } from "react-window"

const ReactWindow = () => {

    const list = new Array(1000).fill("Item").map((_, index) => `Item ${index + 1}`)

    const getitemSize = (index: number) => (index % 2 === 0 ? 50 : 100)

    return (
        <div>
            <Grid
                columnCount={50}
                columnWidth={getitemSize}
                height={600}
                rowCount={20}
                rowHeight={getitemSize}
                width={600}
            >
                {({ columnIndex, rowIndex, style }) => {
                    const index = rowIndex * 50 + columnIndex

                    return (
                        <div style={style}>
                            {list[index]}
                        </div>
                    )
                }}
            </Grid>
        </div>
    )
}

export default ReactWindow