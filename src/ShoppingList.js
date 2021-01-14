import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from 'uuid';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Donuts", qty: "1 Dozen", id: uuid() },
        { name: "Bread", qty: "10 quarter", id: uuid() },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }

  /* addItem(item) {
    this.setState((state) => ({
      items: [...state.items, item],
    }));
  } */

  /**
   * using uuid first we create newItem 
   */
  addItem(item) {
      let newItem = { ...item, id: uuid()};
    this.setState((state) => ({
      items: [...state.items, newItem],
    }));
  }

  /**
   * npm install uuid  
   */
  renderItems() {

    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.name} : {item.qty}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Passing data to parent</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
