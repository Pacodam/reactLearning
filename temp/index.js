import foods from './foods';
import {choice, remove} from './helpers';
import React from 'react';
import ReactDOM from 'react-dom';


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