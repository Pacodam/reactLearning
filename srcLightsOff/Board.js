import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nRows: 5,
    nCols: 5,
    chanceLightStartsOn: 0.20
  };

  constructor(props) {
    super(props);
    this.state = { hasWon: false, board: this.createBoard() };
    this.flipCellsAround = this.flipCellsAround.bind(this);

  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    for (let i = 0; i < 5; i++) {
      let row = [];
      for (let j = 0; j < this.props.nCols; j++) {
        let idx = Math.floor(Math.random() * 2);
        row.push(idx === 0 ? false : true);
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { nCols, nRows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    flipCell(y, x);
    flipCell(y-1, x);
    flipCell(y, x+1);
    flipCell(y+1, x);
    flipCell(y, x-1);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it (up, down, left, right)
      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }

    console.log("result", this.isAllOff(board));
    this.setState({board : board, hasWon : this.isAllOff(board)});

    //this.setState({board, hasWon});
  }

  isAllOff(board){
    let isAllOff = true;
    for(let x = 0; x < this.props.nRows; x++){
      for(let y = 0; y < this.props.nCols; y++){
        if(board[x][y] === true){
          isAllOff = false;
        }
      }
    }
    return isAllOff;
  }

  /** Render game board or winning message. */
  makeBoard() {
    let tblBoard = [];
    for (let i = 0; i < this.props.nRows; i++) {
      let row = [];
      for (let j = 0; j < this.props.nRows; j++) {
        let coord = `${i}-${j}`;
        row.push(<Cell
                  isLit={this.state.board[i][j]} 
                  flipCellsAroundMe = {this.flipCellsAround}
                  coord={coord}
                  />);
      }
      tblBoard.push(<tr key={i}>{row}</tr>);
    }
    return <table className="Board">{tblBoard}</table>
  }

  render() {
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board
    //let hobbiesLi = hobbies.map(h => <li>{h}</li>)
  
   
    // TODO
    return (
      <div>
        <h1>Lights out!</h1>
        {this.state.hasWon? "You won" : this.makeBoard()}
      </div>
    );
  }
}

export default Board;
