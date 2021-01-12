import React, {Component} from 'react';
import './AlphaButtons.css';

class AlphaButtons extends Component {
  constructor(props){
    super(props);
    this.generateButtons = this.generateButtons.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
  }

  handleGuess(evt){
    console.log("evt", evt);
       this.props.handleGuess(evt.value);
  }

   /** generateButtons: return array of letter buttons to render */
   generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
      <button
        key={index}
        value={ltr}
        onClick={this.handleGuess}
       // disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

    render(){
      
        return( 
          <div>
           <p className="AlphaButtons">
           {this.generateButtons()}
           </p>
</div>
        )
    }
}

export default AlphaButtons;