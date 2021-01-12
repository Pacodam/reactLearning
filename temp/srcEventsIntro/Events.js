import React, {Component} from 'react';
import "./Events.css";

class Events extends Component{
    static defaultProps = {
        messages :  [
            "A fool thinks himself",
            "Educating the mind without",
            "Not everything that is faced"
        ]
    };


    dispenseWisdom = () => {
      console.log( "PROPS", this.props);
      let {messages} = this.props;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    };


   /*  dispenseWisdom(){
      
        let rIndex = Math.floor(Math.random() * this.props.messages.length);
        console.log(this.props.messages[rIndex]);
    };
 */
        handleKeyUp(evt){
            alert("you pressed something!");
            if(evt.keyCode === 56){
                console.log(evt);
            }else{
                alert("Boo");
            }
        }
        
    

    render(){
        return(
            <div>
            <div className="Events" onMouseEnter={this.dispenseWisdom}>
            😁
            </div>
            <div>
            <h3>Try typing in here:</h3>
            <textarea onKeyUp={this.handleKeyUp}></textarea>
            </div>
            </div>
        )
    }
}

export default Events;