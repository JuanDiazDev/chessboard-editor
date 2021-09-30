import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import { Board } from './components/Board';
import Header from './components/Header';

function App() {
  return (
    <Container maxWidth = {'xl'}>
       <Header></Header>
       <Board></Board>
    </Container>
  );
}

export default App;
