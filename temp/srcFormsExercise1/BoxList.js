import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState((state) => ({
      items: [...state.items, item],
    }));
  }

  removeItem(id) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  }

  /**
   * arrow function instead of constructor binding!
   */
  renderItems() {
    return (
      <div>
        {this.state.items.map((item) => (
          <Box
            id={item.id}
            key={item.id}
            data={item}
            removeItem={() => this.removeItem(item.id)}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Color Box Maker Thingy</h1>
        <NewBoxForm addItem={this.addItem} />
        {this.renderItems()}
      </div>
    );
  }
}

export default BoxList;
