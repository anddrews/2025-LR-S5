import { Container
  
 } from './components/container/Container';
import './App.css';

export const App = () => {
  const ref = useRef();

    return (
      <Container ref={ref}/>
    )

}

