import React, {Component} from 'react';

class StateClickerSolution extends Component {
    constructor(props){
        super(props);
        this.state = { num : 0};
        this.generateRand = this.generateRand.bind(this);
       
        
    };

    generateRand(){
        let rand = Math.floor(Math.random() * this.props.maxNum);
        this.setState({num : rand});
    }
    render(){
        return(
            <div>
            <h1>Number is  { this.state.num}</h1>

            {/*WAY 1 */}
            {this.state.num === 7 && <h2>YOU WIN!</h2>}
            {this.state.num !== 7 && <button onClick = {this.generateRand}>Random number</button>}

             {/*WAY 2 */}
             {this.state.num === 7 ? <h2>YOU WIN!</h2> :
              <button onClick = {this.generateRand}>Random number</button>}
            </div>
        )

    }
}

export default StateClickerSolution;