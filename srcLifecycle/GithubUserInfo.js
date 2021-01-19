import React, {Component} from 'react';
import Fragment from 'react';
import axios from "axios";

class GithubUserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {name : '', image : ''};
    }

    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        const data = response.data;
        this.setState({name : data.name, image : data.avatar_url});
    }

    render() {
        return (
            <div>
            <h1>GITHUB USER INFO</h1>
            <p>{this.state.name}</p>
            <img alt = {this.props.username} src= {this.state.image} />
            </div>
        )
    }
}

export default GithubUserInfo;