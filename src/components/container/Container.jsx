import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Increment } from '../increment/Increment';
import { Decrement } from '../decrement/Decrement';
import { Button } from '../button/Button';
    import {CardCount } from '../input/Input';
import styles from './container.module.css';

export const Container = () => {
    const [count, setCount] = useState({value: 0});
    const [disabled, setDisabled] = useState(false);

    const handleIncrement = useCallback(() => setCount(({value}) => ({value: value + 1})), [count]);
    const memoizedValue = useMemo(() => () => count, [disabled]);
    const memRef = useMemo(() => ({current: null}), []);
    const ref = useRef(); // {current: null}

    useEffect(() => {
        setCount(prev => prev + 1);

        return () => {
            console.log('from return')
        }
    }, [location.search]);

    return (
        <div ref={ref} className={styles.container}>
            <div className={styles.containerActions}>
                <Button onClick={() => {setDisabled(v => !v)}}>Change disable</Button>
                <Button onClick={handleIncrement}>Increment</Button>
                <Button disabled={disabled} onClick={() => setCount(({value}) => ({value: value - 1}))}>Decrement</Button>
                {count.value < 4 && <Button>Simple</Button>}
            </div>
            <h3>{count.value}</h3>
            <h3>{memoizedValue.value}</h3>
            <CardCount setToCart={() => {}} id={3} initialValue={10}/>
                <a href="/menu">Menu</a>
        </div>
    )
}