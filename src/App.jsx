import { Component, Fragment, useEffect, useState } from 'react';

import { Counter } from './components/counter/Counter';
import './App.css';

import { Table } from './components/table/Table';
import { Button } from './components/Button';

const BoldCell = ({item}) => <div style={{color: 'red', fontStyle: 'italic', fontWeight: 'bold'}}>{item}</div>
// some changes


    // const fetchData = async(setter) => {
    //     const res = await fetch.apply...
    //     setter(res)
    // }

export const App = () => {
  const [count, setCount] = useState(() => 0);
  const [action, setAction] = useState(() => (v) => v + 1);


  useEffect(() => {



  }, [])

    return (
      <>
        <Counter count={count}>
          <h1>Children</h1>
          <h1>Children</h1>
          <h1>Children</h1>
        </Counter>
      </>
    )

}

