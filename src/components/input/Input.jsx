import { useState, useRef, useEffect } from 'react';

export const CardCount = ({setToCart, id, initialValue}) => {
    // const [value, setValue] = useState(0);
    // const [error, setError] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = initialValue;
    }, [])

    return (
        <form action="/path" method="POST" onSubmit={(e) => {
            e.preventDefault();
            setToCart(+e.target.elements[0].value, id);
        }}>
            <input
                type="number"
                name={id}
                min="1"
                // value={value}
                // onChange={(({target:{ value}}) => {setValue(value)})}
                ref={inputRef}
            />
            <button type="submit">Add to Cart</button>
        </form>
    )
}