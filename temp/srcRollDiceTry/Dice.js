import React, {Component} from 'react';
import './Dice.css';

class Dice extends Component {
   /*  constructor(props){
        super(props);
    } */
    render(){
        const url = this.props.url;
        
        return(
            <div className="Dice">
             <i  className= {url}></i>
            </div>
        )
    }
}

export default Dice;