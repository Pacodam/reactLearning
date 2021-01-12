import React, {Component} from 'react';
import './Dog.css';
import transs from './transs.jpg';

class Dog extends Component{
    render(){
        return(
            <div className="Dog">
               <h1>Hi dog!</h1>
               <img className="Dog-img" src={transs} />
            </div>
        )
    }
}

export default Dog;