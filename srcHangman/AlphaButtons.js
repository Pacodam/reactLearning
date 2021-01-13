import React, { Component } from "react";
import "./AlphaButtons.css";

class AlphaButtons extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  //this calls to handleGuess in parent
  handleClick(evt) {
    let ltr = evt.target.value;
    this.props.handleGuess(ltr);
    //this.setState({guessed : this.props.handle})
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleClick}
        disabled={this.props.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  render() {
    return (
      <div>
        <p className="AlphaButtons">{this.generateButtons()}</p>
      </div>
    );
  }
}

export default AlphaButtons;
