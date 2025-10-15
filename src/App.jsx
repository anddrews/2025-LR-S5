import { Component, Fragment } from 'react';

import { TableCell } from './components/table/TableCell';
import './App.css';

import { Table } from './components/table/Table';

const BoldCell = ({item}) => <div style={{color: 'red', fontStyle: 'italic', fontWeight: 'bold'}}>{item}</div>
// some changes
export class App extends Component {
  render() {
    return (
        <Table
          items={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}
          columns={['first', 'second', 'third']}
          cellComponent={BoldCell}
        />
    )
  }

}

