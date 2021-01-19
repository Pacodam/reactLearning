import axios from 'axios';
import React, {Component} from 'react';
import './ZenQuote.css';

class ZenQuote extends Component{
    constructor(props){
        super(props);
        console.log("INSIDE CONSTRUCTOR");
        this.state = ({ quote: "", isLoaded: false});
    }

    /**
     * Order: 1)constructor, 2)render, 3)componentDidMount (this only is
     * called one time)
     * Any fetching data should be accessed in componentDidMount and not in
     * the constructor, the reason is for convention.
     */
    componentDidMount(){
        
        //load data
        console.log("INSIDE COMPONENT DID MOUNT");
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                function() {
                     this.setState({quote : response.data, isLoaded : true})
                }.bind(this),
                3000
            ); 
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log("INSIDE COMPONENT DID UPDATE");
       
        console.log(prevState);
        console.log("actual prop", this.props.prop);
        console.log("previous prop", prevProps);

    }

    render(){
        console.log("INSIDE RENDER");
        return(
            <div>
            {this.state.isLoaded ? (
                <div>
                  <h1>Always remember...</h1>
                  <p>{this.state.quote}</p>
                </div>
            ) : (
            <div className="pulse-container">  
                <div className="pulse-bubble pulse-bubble-1"></div>
                <div className="pulse-bubble pulse-bubble-2"></div>
                <div className="pulse-bubble pulse-bubble-3"></div>
            </div>
            )}
            </div>
        );
    }
}

export default ZenQuote;