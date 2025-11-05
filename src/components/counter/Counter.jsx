// import { useState, useEffect} from 'react';
// import {ReactComponent as Logo} from './assests/logo/ongotpointer/capture.svg';

export const Counter = ({count, children}) => {
    // const [count, setCount] = useState(0);

    // useEffect(() => {      
    //     setInterval(() => {
    //         setCount(count => count + 1); // it adds 2 because of StrictMode
    //     }, 1000);
    // }, [])

    return (
        <>
        {children}
        <h1>{count}</h1>
        </>
    )
}