import { useState, useEffect, useCallback, useMemo, useRef, memo, forwardRef } from 'react';
import { Increment } from '../increment/Increment';
import { Decrement } from '../decrement/Decrement';
import { Button } from '../button/Button';
import {CardCount } from '../input/Input';
import styles from './container.module.css';
import {useSelector, useDispatch, connect} from 'react-redux';
import  { increment, decrement, incrementByAmount } from '../../store/features/counter';




export const Container = forwardRef(() => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);



    return (
        <div  className={styles.container}>
            <div className={styles.containerActions}>
                {/* <Button onClick={() => {setDisabled(v => !v)}}>Change disable</Button> */}
                <Button onClick={() => dispatch(increment())}>Increment</Button>
                {/* <Button  onClick={() => dispatch(decrement())}>Decrement</Button> */}
                {count}
            </div>
        </div>
    )
})

export const MemoizedContainer = memo(Container, (prev, curr) => false)
