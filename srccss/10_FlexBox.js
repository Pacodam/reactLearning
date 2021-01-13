import React, { Component } from "react";
import "./10_FlexBox.css";

class FlexBox extends Component {
  render() {
    return (
      <div className="FlexBox">
        <h1>FlexBox</h1>
        <div className="container">
          <div className="item">1</div>
          <div className="item2">2</div>
          <div className="item3">3</div>
        </div>
        <br></br>
        <div className="container1">
          <div className="item one">1</div>
          <div className="item two">2</div>
          <div className="item three">3</div>
        </div>
      </div>
    );
  }
}

export default FlexBox;
