import './App.css';
import ScoreKeeper from './ScoreKeeper';
import IconList from './IconList';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery title="Lottery"/>
      <Lottery title="Mini Daily" maxBalls={4} maxNum={10} />
      <IconList/>
      <ScoreKeeper/>
    </div>
  );
}

export default App;
