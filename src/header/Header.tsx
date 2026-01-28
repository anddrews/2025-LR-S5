import type { FC } from 'react';
import { useState, useContext } from 'react';

import type { THeaderProps } from "./THeaderProps";
import styles from './header.module.css';
import {LocalesContext} from '../context/I18n';

export const Header: FC<THeaderProps> = ({name, children}) => {
    const [count, setCount] = useState(0);
    const {dictionary, chooseLanguage} = useContext(LocalesContext);
    
    return (
        <>
            <button onClick={() => {chooseLanguage('en')}}>Change language</button>
                <h1 className={styles.header}>{dictionary[name]}</h1>
                {children}
        </>
    )
}

