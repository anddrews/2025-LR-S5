import {useState} from 'react';

const TextInput = ({onChange}) => (
    <input type="text" onChange={({target: {value}}) => {onChange(value)}} />
)

const List = ({ values }) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        {values.map(value => (
            <label>
                <input type="checkbox" />
                {value}
            </label>
        ))}
    </div>
);

const Range = () => <h6>Range</h6>

const categoriesMap = {
    textInput: TextInput,
    list: List,
    range: Range
}

export const Filter = ({ filter, onChange }: any) => {
    const [filterState, setFilterState] = useState({});
    const handleCategoryChange = (category) => (value) => {
        const nextFilterObj = {
            ...filterState,
            [category]: value
        }
        setFilterState(nextFilterObj);
        onChange(nextFilterObj);
    }
    return filter.map(({ category, type, values }) => {
        const Component = categoriesMap[type]
        return (
            <div>
                <h4>{category}</h4>
                <Component values={values} onChange={handleCategoryChange(category)} />
            </div>
        )
    })
}