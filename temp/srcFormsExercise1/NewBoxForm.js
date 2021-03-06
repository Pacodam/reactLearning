import React, { Component } from "react";
import {v4 as uuid} from 'uuid';

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
      this.setState({[evt.target.name] : evt.target.value}); //computed properties!
  }

  /**
   * The unique id is created on submit!
   */
  handleSubmit(evt) {
      evt.preventDefault();
      const newItem = {...this.state, id: uuid()}
     this.props.addItem(newItem);
      this.setState({height : '', width : '', backgroundColor : ''});
      
  }

  render() {
    return (
      
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            name="height"
            id="height"
            value={this.state.height}
            required = {true}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            name="width"
            id="width"
            value={this.state.width}
            required = {true}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="backgroundColor">BackgroundColor:</label>
          <input
            type="text"
            name="backgroundColor"
            id="backgroundColor"
            value={this.state.backgroundColor}
            required = {true}
            onChange={this.handleChange}
          />
          <br></br>
          <button>Add a new box!</button>
        </form>
      
    );
  }
}

export default NewBoxForm;
