import React, {Component} from 'react';

class Box extends Component{
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(){
       this.props.removeItem(this.props.data.id);
    }

    render(){
        let { height, width, backgroundColor} = this.props.data;
        let style = {height : `${height.toString()}px`, width : `${width.toString()}px`, backgroundColor : `${backgroundColor}`}
        //{height: "27px", width: "42px", backgroundColor: "purple"}
        return(
            <div>
             <br></br>
              <div style={style}>
              </div>
              <button onClick={this.handleRemove}>Remove the box!</button>
              <br></br>
            </div>
        )
    }
}

export default Box;