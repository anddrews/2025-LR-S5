import { createContext, FC, PropsWithChildren, useState} from 'react';
import en from '../assets/locales/en';
import fr from '../assets/locales/fr';


export const LocalesContext = createContext();
const languageMap = {
    en,
    fr
}

export const Locales: FC<PropsWithChildren> = ({children}) => {
    const [dictionary, setDictionary] = useState(fr);
    const chooseLanguage = (language: string) => {
        setDictionary(languageMap[language as keyof typeof languageMap]);
    }

    return (
        <LocalesContext.Provider value={{dictionary, chooseLanguage}} >
            {children}
        </LocalesContext.Provider>
    )
}