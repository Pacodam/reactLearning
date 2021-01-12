import React, {Component} from 'react';
import './Borders.css';

class Borders extends Component{
    render(){
        return(
            <div>
              <h1>Borders</h1>
              <div id="b1">Border</div>
              <div id="b2">Border</div>
              <div id="b3">Border</div>
              <div id="b4">Border</div>
              <div id="b5">Border</div>
              <br></br>
              <div className="b6">Border-shadow</div>
              <div className="b7">Border-shadow</div>
              <div className="b8">Border-shadow</div>
              <div className="b9">Border-shadow</div>
              <div className="b10">Border-shadow</div>
              <div className="b11">Border-shadow</div>
            </div>
        )
    }
}

export default Borders;