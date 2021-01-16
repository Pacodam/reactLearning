import React, {Component} from 'react';

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = ({ name : ''});
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
     this.setState({[evt.target.name] : evt.target.value});
    }

    handleSubmit(evt){
      evt.preventDefault();
      this.props.addItem(this.state);
      this.setState({name : ''});
    }

    render(){
        return(
            <div>
             <form onSubmit={this.handleSubmit}>
               <label htmlFor="name">New Todo</label>
               <br></br>
               <input  
                  type = "text"
                  name = "name"
                  id = "name"
                  value = {this.state.name}
                  required = {true}
                  onChange = {this.handleChange}
                  />
                  <button>ADD TODO</button>
             </form>
            </div>
        )
    }
}

export default NewTodoForm;