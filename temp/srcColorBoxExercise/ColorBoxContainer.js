import React, {Component} from 'react';
import './ColorBoxContainer.css';
import ColorBox from './ColorBox';
import { randCol} from './helpers';

class ColorBoxContainer extends Component {
    constructor(props){
        super(props);
        this.state = ({boxes : Array.from({length : 36})});
    }
    render(){
        const colorBoxes = this.state.boxes.map(b => <ColorBox rgb= {randCol()} />);
        return(
            <div className= "ColorBoxContainer">
             {colorBoxes}
            
            </div>
        )
    }
}

export default ColorBoxContainer;
