import React, {Component} from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import {v4 as uuid} from 'uuid';

class BoxList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : []
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    };

    addItem(item){
        let newItem = { ...item, id: uuid()};
        this.setState((state) => ({
          items: [...state.items, newItem],
      }));
    }

    removeItem(id){
        for (let i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id === id) {
                this.setState({items: [ ...this.state.items.slice(0, i), ...this.state.items.slice(i + 1) ]});
            }
        }
    }

    renderItems(){
        return (
            <div>
            {this.state.items.map((item) => (
                <Box key={item.id} data={item} removeItem={this.removeItem} />
            ) )}
            </div>
        )
    }

    render(){
        return(
            <div>
            <h1>Box Maker Thingy</h1>
            <NewBoxForm addItem = {this.addItem}/>
            {this.renderItems()}
            </div>
        )
    }
}

export default BoxList;