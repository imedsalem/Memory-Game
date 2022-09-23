import './App.css';
import { Container } from 'react-bootstrap'
import ScoreBar from './components/ScoreBar'
import CardList from './components/CardList'

function App() {
  return (
    <Container fluid>
      <ScoreBar />
      <CardList />
    </Container>
  );
}

export default App;
