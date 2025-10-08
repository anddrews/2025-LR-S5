import { Component, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './components/Button';
import {Odd} from './components/Odd';
import {Even} from './components/Even';

const arr = [1, 3, 15, 8, 2, 6, 5, 19];

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Button />
        {
          arr.map(item => item % 2 ? <Odd /> : <Even />)
        }
      </Fragment>
    )
  }
}

