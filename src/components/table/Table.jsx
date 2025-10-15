import { TableRow } from "./TableRow";

import styles from './table.module.css';

export const Table = ({items, columns, cellComponent}) => (
    <div className={styles.table} style={{gridTemplateColumns: `repeat(3, 1fr)`}}>
        <TableRow items={columns} header cellComponent={cellComponent}/>
        {
            items.map(rowItems => (
                <TableRow items={rowItems} cellComponent={cellComponent}/>
            ))
        }
    </div>
)