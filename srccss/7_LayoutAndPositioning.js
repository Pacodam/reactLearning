import React, {Component} from 'react';
import './7_LayoutAndPositioning.css';

class LayoutAndPositioning extends Component{
    render(){
        return(
            <div>
            <h1>Layout and positioning</h1>
            <div className="container">
            <div className="inner">Padding as % applies relative to containing block</div>
            </div>
            <br></br>
            <div className="container1">
            <div className="inner1">By default, elements have no margin</div>
            </div>

            <br></br>
            <div className="container2">
            <div className="inner2">Adding margin (wtf?)</div>
            </div>
            <br></br>
            <div class="container3">
            <div class="inner3">Horizontal centering</div>
             </div>

             <br></br>
            <div className="block"></div>
            <div className="block relative"></div>
            <div className="block green"></div>

            <br></br>
            <div className="outer1">
            <div className="inner1">
            <div className="core1"></div>
            </div>
            </div>


            <div className="outer2">
            <div className="inner2">
            <div className="core2"></div>
            </div>
            </div>


            </div>
        )
    }
}

export default LayoutAndPositioning;