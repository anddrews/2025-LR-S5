import {useState, useEffect} from 'react';

// {
//     '123': 5,
//     '456': 5
// }

export const ProductsList = () => {
    const [page, setPage] = useState(1);
    const products = useProducts('/products', page);

    return (
        <ul>
            {products.map(({product}) => (
                <li>{product.name}</li>
            ))}
        </ul>
    )
}