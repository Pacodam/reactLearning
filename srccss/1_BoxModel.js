import React, {Component} from 'react';
import './1_BoxModel.css';

class BoxModel extends Component{
    render(){
        return(
            <div>
            <h1>Box Model</h1>
            <div id="div1">nothing</div>
            <div id="div2">padding1</div>
            <div id="div3">padding2</div>
            <div id="div4">padding3</div>
            <div id="div5">padding4</div>
            <br></br>
            <div id="div6">margin1</div>
            <div id="div7">margin2</div>
            <div id="div8">margin3</div>
            <div id="div9">margin4</div>
            <br></br>
            <div id="div10">border1</div>
            <div id="div11">border2</div>
            <div id="div12">border3</div>
            <div id="div13">border4</div>
            <br></br>
            <div id="b1">box1</div>
            <div id="b2">box2</div>
            <div id="b3">box3</div>
            <div id="b4">box4</div>
            <br></br>
            <div id="b5">box5</div>
            <div id="b6">box6</div>
            <div id="b7">box7</div>
            <div id="b8">box8</div>
            </div>
        )
    }
}

export default BoxModel;

