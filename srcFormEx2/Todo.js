import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = ({ editing: false, newName : this.props.data.name});
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTextEdit = this.renderTextEdit.bind(this);
    }

    handleEdit(){
      this.setState({ done : false, editing : true});
    }

    handleChange(evt){
      evt.preventDefault();
      console.log("changes")
      this.setState({[evt.target.name] : evt.target.value});
    }

    handleSubmit(){
      this.props.editItem(this.props.data.id);
      this.setState({ editing : false});
    }

    renderTextEdit(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <input  
               type = "text"
               name = "newName"
               id = "newName"
               value = {this.state.newName}
               required = {true}
               onChange = {this.handleChange}
               />
          </form>
            </div>
        )
    }

    render(){
        return(
            <div>
             {this.state.editing? this.renderTextEdit() : <p onClick={this.handleEdit}>{this.state.newName}</p>}
             <button onClick={this.handleEdit}>EDIT</button>
             <button onClick={this.props.removeItem}>REMOVE</button>
            </div>
        )
    }
}

export default Todo;