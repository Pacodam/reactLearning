import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    faces : ["one", "two", "three", "four", "five", "six"]
  }
  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick(){
    console.log("idx in die ", this.props.idx);
    this.props.handleClick(this.props.idx);
  }
  render() {
    
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        idx={this.props.idx}
        onClick={this.handleClick}
      >
      <i className = {`Dice fas fa-dice-${this.props.faces[this.props.val - 1]}`} />
      </button>
    );
  }
}

export default Die;
