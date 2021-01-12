import React, {Component} from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component{
  static defaultProps = {
      sides : ["one", "two","three","four","five","six" ]
  };
     
    constructor(props){
        super(props);
        this.state = {
            dice1: 'one',
            dice2: 'one',
            isRolling: false
        };
        this.rollDice = this.rollDice.bind(this);

    };

    rollDice(){
            const dice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
            const dice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
            this.setState({dice1 : dice1, dice2: dice2, isRolling : true});    
            
            //wait one second, then set rolling to false
            setTimeout(() => {
                this.setState({isRolling: false});
            },1000);      
    }

    render(){
       console.log(this.props.dices);
        return(
            <div className="RollDice">
              <div className="RollDice-container">
               <Dice face = {this.state.dice1} isRolling={this.state.isRolling} />
               <Dice face = {this.state.dice2} isRolling={this.state.isRolling}/>
              </div>
              <button  onClick={this.rollDice}  disabled={this.state.isRolling}>
                 {this.state.isRolling ? "Rolling" : "Roll dice!"}
              </button>
             
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