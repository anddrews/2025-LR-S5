
import { Container } from './components/container/Container';
import { Provider } from 'react-redux';
import {store } from './store/store';
import './App.css';

export const App = () => {

    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )

}

