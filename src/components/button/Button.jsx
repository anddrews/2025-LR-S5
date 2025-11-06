import { useEffect } from 'react';

export const Button = ({ children, size, variant, ...rest }) => {
    useEffect(() => {
        console.log('on Button mount')

        return () => {
            console.log('on Button unmount')
        }
    }, []);
    
    return (
        <button {...rest} >
            {children}
        </button>
    )
}