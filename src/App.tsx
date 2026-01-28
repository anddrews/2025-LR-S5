import { useState, useMemo } from 'react'
import './App.css'
import {Header } from './header/Header';
import { Locales } from './context/I18n';
import { useTranslation } from 'react-i18next';
import {FilterWrapper} from './components/filter/FilterWrapper'



function App({a, b}: {a: number, b: number}) {
  const [count, setCount] = useState(0)
  const { t  } = useTranslation('translate', {keyPrefix: 'common.components.main'});

  
  return (
    <Locales>
      <FilterWrapper/>
    </Locales>
  )
}

export default App;
