import FlipCoin from './FlipCoin.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <FlipCoin totalFlips={20}/>
       <FlipCoin/>
    </div>
  );
}

export default App;
