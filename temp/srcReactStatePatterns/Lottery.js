import React, {Component} from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends Component{
    static defaultProps= {
        title: 'Lotto',
        maxBalls:6,
        maxNum: 40
    };

    constructor(props){
        super(props);
        //this.state = { balls : []};
        this.state = {nums: Array.from({length: this.props.maxBalls})};
        this.generateBalls = this.generateBalls.bind(this);
    }

    generateBalls(){
 
        this.setState(curState => ({
            nums: curState.nums.map(
                n=> Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
        // let ballsGenerated = [];
        // for(let i = 0; i < this.props.numBalls; i++){
        //     let ball = Math.floor(Math.random() * this.props.maxNum + 1);
        //     ballsGenerated.push(ball);
        // }
        // this.setState({balls : ballsGenerated})
    }
    render(){
        const balls = this.state.nums.map(d => <LotteryBall num= {d} />);
        return(
            <div className="Lottery">
             <h1>{this.props.title}</h1>
              <div className="Lottery-container">
                {balls}
             </div>
             <button onClick={this.generateBalls}>Generate</button>
            </div>
        )
    }
}

export default Lottery;