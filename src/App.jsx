
import { Container } from './components/container/Container';
import { Provider } from 'react-redux';
import {store } from './store/store';
import './App.css';
import { TestContext } from './context/testContext';

export const App = () => {

    return (
      <Provider store={store}>
        <TestContext>
          <Container />
        </TestContext>
      </Provider>
    )

}

