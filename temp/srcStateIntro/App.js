import './App.css';
import Game from './Game';
import Game2 from './Game2';
import Rando from './Rando';
import Button from './Button';
import StateClicker from './StateClicker';
import StateClickerSolution from './StateClickerSolution';

function App() {
  return (
    <div className="App">
       {/* <Game/>
       <Game2/>
        <Button />
         <Rando maxNum = {10}/>
        */}
      <StateClickerSolution maxNum = {10} />

    </div>
  );
}

export default App;
