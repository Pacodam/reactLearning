import React, { Component } from "react";
import "./Hangman.css";
import {randomWord} from "./words.js";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import AlphaButtons from "./AlphaButtons";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images : [img0, img1, img2, img3, img4, img5, img6]
   };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.guess = this.guess.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  guess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
      
    }));

  }

  handleRestart() {
    this.setState({nWrong : 0, answer: randomWord()});
  }

  /** render: render game */
  render() {
    const isMaxWrong = this.state.nWrong === this.props.maxWrong;
    const image = this.props.images[this.state.nWrong];
    console.log("word: ", this.state.answer);
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={image} alt={`${this.state.nWrong}/6`} />
        <p className='Hangman-wrong'>Wrong guesses: {this.state.nWrong}</p>
        <p className='Hangman-word'>{isMaxWrong ? this.state.answer :this.guessedWord()}</p>
        { isMaxWrong ? <h2>Sorry, you lose</h2>  : <AlphaButtons guess={this.guess}/>}
        <button onClick={this.handleRestart}>Restart game</button>
      </div>
    );
  }
}

export default Hangman;
