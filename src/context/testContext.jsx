import { createContext, useState } from 'react';

export const Context = createContext({});

export const TestContext = ({children}) => {
    const [name, setName] = useState('Alex');
    
    return (
        <Context.Provider value={{name, setName}}>
            {children}
        </Context.Provider>
    )

}