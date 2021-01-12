import React, {Component} from 'react';

class Rando extends Component {
    constructor(props){
        super(props);
        this.state = { num : 0};
        this.makeTimer();
    };

    makeTimer(){
        setInterval(() => {
            let rand = Math.floor(Math.random() * this.props.maxNum);
            this.setState({num : rand});
        }, 1000);
    }

    render(){
        //EVERY time the state changes, render is called over and over
        //console.log("CHANGES!");
        return(
            <div>
            <h1>"Number is " { this.state.num}</h1>
            <button onClick={ function() {
                alert("you clicked")
            }}>Click me!</button>
            </div>
        )

    }
}

export default Rando;