import React, {Component} from 'react';

class StateClicker extends Component {
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
        let tagShow = <button onClick={this.generateRand}>Random number</button>;
        if(this.state.num !== 7){
            console.log("7?");
            tagShow = <button onClick={this.generateRand}>Random number</button>;
        }else{
            console.log("else");
            tagShow = <h1>YOU WIN!</h1>;
        } 

        return(
            <div>
            <h1>Number is  { this.state.num}</h1>
            {tagShow}
            </div>
        )

    }
}

export default StateClicker;