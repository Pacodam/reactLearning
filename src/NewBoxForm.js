import React, { Component } from "react";

class NewBoxForm extends Component {
  static defaultProps = {
    colors: [
      "white",
      "silver",
      "gray",
      "black",
      "red",
      "maroon",
      "yellow",
      "olive",
      "lime",
      "green",
      "aqua",
      "teal",
      "blue",
      "navy",
      "fuchsia",
      "purple",
    ],
  };

  constructor(props) {
    super(props);
    this.state = ({ height: "", width: "", backgroundColor: "" });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
      this.setState({[evt.target.name] : evt.target.value});
  }

  handleSubmit(evt) {
      evt.preventDefault();
      if(this.state.height == undefined || this.state.width == undefined || this.state.backgroundColor == undefined){
          alert("Values required!");
      }
      else{
     this.props.addItem(this.state);
      this.setState({height : '', width : '', backgroundColor : ''});
      }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            name="height"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            name="width"
            id="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="backgroundColor">BackgroundColor:</label>
          <input
            type="text"
            name="backgroundColor"
            id="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
          <br></br>
          <button>Add a new box!</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
