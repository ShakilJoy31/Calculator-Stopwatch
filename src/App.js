import logo from './logo.svg';
import './App.css';
import Stopwatch from './Stopwatch';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <Stopwatch></Stopwatch>
      <h1 style={{marginTop:'100px'}}>Calculator</h1>
      <div style={{marginTop:'100px'}}>
      <Calculator></Calculator>
      </div>
    </div>
  );
}

export default App;
