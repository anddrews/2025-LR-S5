import { store } from './store/store'
import { Provider } from 'react-redux'

import { Container,
 } from './components/container/Container';
import './App.css';

export const App = () => {

    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )

}

