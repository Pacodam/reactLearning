import React, {Component} from 'react';
import './2_Block_Inline_Elements.css';

class BlockInlineEl extends Component{
    render(){
        return(
            <div>
              <h1>Block and Inline elements</h1>
              <div id="container">
                <div className="box1">Hello</div>
                <div className="box2">World</div>
                </div>
                <br></br>
                <div id="container2">
                <div className="box1">Hello</div>
                <div className="box2">World</div>
                </div>
                <br></br>
                <div id="container">
                <div className="box3">Hello</div>
                <div className="box4">World</div>
                </div>
                <br></br>
                Hello <span className="highlight">world</span>, I am demonstrating an inline
                element.
                <br></br>
                Hello <span className="highlight1">world</span>, I am demonstrating an inline
                element with padding applied.
                <br></br>
                Hello <span className="highlight2">world</span>, I am demonstrating an inline-block
                element .
            </div>
        )
    }
}

export default BlockInlineEl;