import {useState, useEffect} from 'react';

export const useProducts = (path, page) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${path}?page=${page}`)
            .then(data => data.json())
            .then(products => {
                const res = Object
                .entries(products)
                .map(([id, product]) => ({id, ...product}))
                setProducts(res);
            })
    }, [path]);

    return products;
}