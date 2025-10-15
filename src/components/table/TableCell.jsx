import styles from './table.module.css';

export const TableCell = ({item}) => (
    <div className={styles.tableCell}>{item}</div>
)