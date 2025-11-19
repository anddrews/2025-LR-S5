import {useState, useEffect} from 'react';

export const useCartProducts = (cartObj) => {
    const [cart, setCart] = useState([]);
    const products = useProducts('/products');

    useEffect(() => {
        const ids = Object.keys(cartObj);
        const res = products.filter(({id}) => ids.includes(id)).map(product => ({...product, count: cartObj[product.id]}));

        setCart(res);
    }, [products]);

    return cart;
    
}