import {useState, useMemo} from 'react';
import { FilterItems } from "./FilterItems";
import {Filter} from './Filter';
import items from './mock.json';
import styles from './filter.module.css';

const filter = [
        {
            category: 'Search',
            type: 'textInput',
            condition: 'startsWith'
        },
        {
            category: 'Category',
            type: 'list',
            values: categories
        },
        {
            category: 'Price',
            type: 'range',
            values: [0, 100] //@TODO get from elements
        }
    ]

const handleChange = (setFilterState, elements) => (filter) => {
        const nextFilterState = elements.filter(({meal}) => filter.Search ? meal.toLowerCase().startsWith(filter.Search.toLowerCase()) : true)
        setFilterState(nextFilterState);
    }

export const FilterWrapper = () => {
    const [elements, setItems] = useState(items);
    const [filterState, setFilterState] = useState(items);
    const categories = useMemo(() => [...new Set(elements.map(({category}) => category))], [elements]);

    return (
        <div className={styles.filter}>
            <div className={styles.filterFilter}>
                <Filter filter={filter} onChange={handleChange(setFilterState, elements)} />
            </div>
            <div className={styles.filterItems}>

            <FilterItems items={filterState} />
            </div>
        </div>
    )
}