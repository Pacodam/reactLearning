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

    /**
     * Another example of correct way of updating state
     * @param {*} curState 
     */
    handleGuess(ltr) {
      this.setState((st) => ({
        guessed: st.guessed.add(),
        nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      }));
    }
    //and another one. Look how heads/tails counting was resolved
   /*  flipCoin() {
      const newCoin = choice(this.props.coins);
      this.setState(st => {
        return {
          currCoin: newCoin,
          nFlips: st.nFlips + 1,
          nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
          nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
        };
      });
    } */

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

      //way of making conditional. If first condition meets, second tool, and the opposite
         //{this.state.currCoin && <Coin info={this.state.currCoin} />}

        //Array.from concept
       /*   const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
          <Box colors={this.props.allColors} />
          )); */

      
        return(
            <div>
            <h1>Review2</h1>
            <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Review2;