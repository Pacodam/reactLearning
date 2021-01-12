import React, {Component} from 'react';
import './ColorBox.css';
import {randCol} from './helpers';

class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state = ({rgb : this.props.rgb, rgbNew : this.props.rgb});
        this.handleClick = this.handleClick.bind(this);
    }

    generate(){
        while()
        let newRgb = randCol();
        this.setState({rgbNew : randCol()});
    }

    handleClick(e){
        this.generate();
    }

    render(){
        return(
            <div onClick={this.handleClick} style={{backgroundColor: this.state.rgbNew}} className="ColorBox">
               
            </div>
        )
    }
}

export default ColorBox;