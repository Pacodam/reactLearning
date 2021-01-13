import React, {Component} from 'react';
import Review3 from './Review3';

class Review3Child extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.printValue(7);
    }

    render(){
        return(
            <div>
            <li>
            {this.props.value}
            <button 
              onClick={this.props.remove}>
              X
            </button>
          </li>
          <br></br>
          <button
            onClick={this.handleClick}>
            X
            </button>
            </div>
        )
    }
}

export default Review3Child;