import React, {Component} from 'react';
import Coin from './Coin';
import './FlipCoin.css';

class FlipCoin extends Component{
    static defaultProps = {
        coin:
        [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfl1izSEtj71e0qyrV4l-olWskiVuuMPxgoQ&usqp=CAU',
         'https://ktane.timwi.de/HTML/img/Flip%20The%20Coin/TwoEuro.png'
        ],
        totalFlips: 10,
        
    };

    constructor(props){
        super(props);
        this.state = {leftFlips : this.props.totalFlips, heads : 0, tails : 0, playing : false, result : ''};
        this.flipCoin = this.flipCoin.bind(this);
        this.setLeftFlips = this.setLeftFlips.bind(this);
    }

    setLeftFlips(curState){
        return {leftFlips : curState.totalFlips - 1};
    }

    flipCoin(){
        /* Si no estamos playing,  playing a true */
        if(!this.state.playing){
            this.setState({playing: true});
        }
    
        //generamos un random entre los 2 elementos de props
        let idx = Math.floor(Math.random() * this.props.coin.length);

        //guardamos el resultado en el state y descontamos un leftfflip
        this.setState({result : this.props.coin[idx]});
        this.setState(this.setLeftFlips);
        
        //actualizamos el contador de heads/tails en state
        idx === 0 ? this.setState({ heads : this.state.heads + 1 }) : this.setState({ tails : this.state.tails + 1 });
        
        //si hemos agotado las tiradas, playing en false 
        if(this.state.leftFlips === 0){
            this.setState({playing: false, leftFlips : this.props.totalFlips});
        }
    }

    render(){
        console.log(this.state);
        let score = <h2>{`Out of ${this.state.leftFlips} flips, there have been ${this.state.heads} heads and ${this.state.tails} tails`}</h2>;
        console.log(score);
        return(
            <div>
              <h1>{this.state.playing? "Flipping" : "Let's flip a coin!"}</h1>
              {this.state.playing ? <Coin result = {this.state.result}/> : ''}
              <button onClick={this.flipCoin}>{this.state.playing? "Flip meee" : "Start game"}</button>
              {/*this.state.playing ? {score} : ""*/}
              {this.state.playing ? score : ''}
            </div>
        )
    }
}

export default FlipCoin;