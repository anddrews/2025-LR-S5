export const TableRow = ({items, header, cellComponent: Cell}) => items.map(item => (
            <Cell item={item} />
        ))
