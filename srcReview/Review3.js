import React, { Component } from "react";
import Review3Child from "./Review3Child";
import "./Review3.css";

/*
 * INSIDE COMPONENT
 * - Different ways to call event without arguments
 * - Different ways to call event with arguments
 * -FROM CHILD TO PARENT
 * - Different ways to call parent event without arguments
 * - Different ways to call parent event with arguments
 */
class Review3 extends Component {
  static defaultProps = {
    messages: ["msg1", "msg2", "msg3"],
    colors: ["green", "red", "blue", "peachpuff"],
  };
  constructor(props) {
    super(props);
    this.state = { msg: "", msg1: "", msg2: "", nums: [1, 2, 3, 4, 5] };
    this.dispenseWisdom = this.dispenseWisdom.bind(this);
    this.printValue = this.printValue(this);
  }

  dispenseWisdom() {
    console.log(this.props);
    let { messages } = this.props;
    let rIndex = Math.floor(Math.random() * messages.length);
    this.setState({ msg: this.props.messages[rIndex] });
  }

  dispenseWisdom2() {
    console.log(this.props);
    let { messages } = this.props;
    let rIndex = Math.floor(Math.random() * messages.length);
    this.setState({ msg1: this.props.messages[rIndex] });
    this.handleClick1 = this.handleClick1.bind(this);
  }

  dispenseWisdom3() {
    console.log(this.props);
    let { messages } = this.props;
    let rIndex = Math.floor(Math.random() * messages.length);
    this.setState({ msg2: this.props.messages[rIndex] });
  }

  handleClick(color) {
    console.log(`You clicked on the ${color} button.`);
  }

  handleClick1(color) {
    console.log(`You clicked on the ${color} button.`);
  }

  remove(num) {
    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num),
    }));
  }

  printValue(num) {
    console.log("This comes from child: ", num);
  }

  render() {
    //passing to child as prop with arrow function
    let nums = this.state.nums.map((n) => (
      <Review3Child value={n} remove={() => this.remove(n)} />
    ));

    //passing to child as prop with bind in constructor
    let nums2 = this.state.nums.map((n) => (
      <Review3Child value={n} remove={this.remove} />
    ));

    //obtaining data from child and receiving in parent
    let nums3 = this.state.nums.map((n) => (
      <Review3Child  printValue={this.printValue} />
    ));

    return (
      <div className="Review3">
        <h1>Review parts 9, 10</h1>
        <br></br>
        <h1>Without arguments</h1>
        <br></br>
        <h2 id="h1-1" onClick={this.dispenseWisdom}>
          binding in constructor: {this.state.msg}
        </h2>
        <h2 id="h1-2" onClick={this.dispenseWisdom2.bind(this)}>
          binding inline: {this.state.msg1}
        </h2>
        <h2 id="h1-3" onClick={() => this.dispenseWisdom3()}>
          Arrow function: {this.state.msg2}
        </h2>
        <br></br>
        <h1>With arguments</h1>
        <div>
          {this.props.colors.map((c) => {
            const colorObj = { backgroundColor: c };
            return (
              <button style={colorObj} onClick={this.handleClick.bind(this, c)}>
                Click on me!
              </button>
            );
          })}
          <br></br>
        </div>
        <div>
          {this.props.colors.map((c) => {
            const colorObj = { backgroundColor: c };
            return (
              <button style={colorObj} onClick={this.handleClick1}>
                Click on me!
              </button>
            );
          })}
        </div>
        <br></br>
        <h1>Passing functions to child components</h1>
        <ul>{nums}</ul>

        <br></br>
        <h1>
          Passing functions to child components and returning value from the
          child
        </h1>
        <ul>{nums3}</ul>
      </div>
    );
  }
}

export default Review3;
