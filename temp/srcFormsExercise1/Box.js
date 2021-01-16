import React, {Component} from 'react';

class Box extends Component{
    render(){
        let { height, width, backgroundColor} = this.props.data;
        let style = {
                     height : `${height.toString()}em`, 
                     width : `${width.toString()}em`,
                     backgroundColor : `${backgroundColor}`
                    }
        return(
            <div>
             <br></br>
              <div style={style}>
              </div>
              <button onClick={this.props.removeItem}>Remove the box!</button>
              <br></br>
            </div>
        )
    }
}

export default Box;