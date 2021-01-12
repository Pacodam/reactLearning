import React, {Component} from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component{
  static defaultProps = {
      dices : [
          {url : 'fas fa-dice-one'},
          {url : 'fas fa-dice-two'},
          {url : 'fas fa-dice-three'},
          {url : 'fas fa-dice-four'},
          {url : 'fas fa-dice-five'},
          {url : 'fas fa-dice-six'}
      ]
  };
     
    constructor(props){
        super(props);
        this.state = {
            dice1: this.props.dices[0],
            dice2: this.props.dices[0],
            isRolling: false
        };
        this.rollDice = this.rollDice.bind(this);

    };

    rollDice(){
        this.setState({isRolling: true});
        setInterval(() => {
            let dice1 = this.props.dices[Math.floor(Math.random() * this.props.dices.length)];
            let dice2 = this.props.dices[Math.floor(Math.random() * this.props.dices.length)];
            this.setState({dice1 : dice1, dice2: dice2});   
        }, 1000);
         
    }

    render(){
       
        return(
            <div className="RollDice">
              <div className="RollDice-dices">
               <Dice url = {this.state.dice1.url} />
               <Dice url = {this.state.dice2.url} />
              </div>
              <button className="RollDice-button" onClick={this.rollDice}>Roll dice!</button>
            </div>
        )
    
        
    }
}

export default RollDice;


/* makeTimer(){
    setInterval(() => {
        let rand = Math.floor(Math.random() * this.props.maxNum);
        this.setState({num : rand});
    }, 1000);
} */