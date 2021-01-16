import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  addItem(item) {
    let newItem = { ...item, id: uuid() };
    this.setState((state) => ({
      items: [...state.items, newItem],
    }));
  }

  editItem(id) {
      console.log("editii")
    // for (let i = 0; i < this.state.items.length; i++) {
    //   if (this.state.items[i].id === id) {
    //     this.setState({
    //       items: [
    //         ...this.state.items.slice(0, i),
    //         ...this.state.items.slice(i + 1),
    //       ],
    //     });
    //   }
    // }
  }

  removeItem(id) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  }

  renderItems() {
    return (
      <div>
        {this.state.items.map((item) => (
          <Todo
            key={item.id}
            data={item}
            id={item.id}
            editItem={this.editItem}
            removeItem={() => this.removeItem(item.id)}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <h2>A simple React Todo List App</h2>
        {this.renderItems()}
        <NewTodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoList;
