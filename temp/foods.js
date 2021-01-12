const fruits =  [ "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
"🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑",
];

export default fruits;


import foods from './foods';
import {choice, remove} from './helpers';

class App extends React.Component{
    render(){
        return(
            <div>
              I'd like one {choice(foods)} , please
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));