import logo from './logo.svg';
import './App.css';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
   <div className="App">
   <ZenQuote prop= "cat" />
   <ZenQuote prop= "dog" />
      {/* <GithubUserInfo username = "facebook" />
      <GithubUserInfo username = "Colt" />
  </div> */}
    </div>
  );
}

export default App;
