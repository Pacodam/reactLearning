import React, {Component} from 'react';

class Review2 extends Component{
    static defaultProps = {
        title: "Lotto",
        numBalls: 6,
        maxNum: 40
      };

    constructor(props){
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) };
        this.handleClick = this.handleClick.bind(this);
    }
    
    //Elegant code: Fill with random nums the created array in state with length of numBalls
    generate() {
        this.setState(curState => ({
          nums: curState.nums.map(
            n => Math.floor(Math.random() * this.props.maxNum) + 1
          )
        }));
      }

      //good practice, not calling directly generate
      handleClick() {
        this.generate();
      }

       // This is how numeric state modifications should be done, because of asynchronous react...
    tripleKill() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }
    //curState arguments represents state
    incrementScore(curState) {
        return { score: curState.score + 1 };
    }

    //look at third line: this adds newIcon to previous existing array icons inside state
    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState({ icons: [...this.state.icons, newIcon] });
      }


    render(){
        return(
            <div>
            <h1>Review2</h1>
            <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Review2;