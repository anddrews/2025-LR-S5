import styles from './filter.module.css'

export const FilterItems = ({items}:{items: {meal: string; price: number; category: string}[]}) => (

    items.map(({meal, price, category}) => (
        <div className={styles.item}>
            {meal}, {price}, {category}
            </div>
    ))

)