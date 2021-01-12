import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.css';

class Bootstrap extends Component{
    constructor(props){
        super(props);
        this.alerts = this.alerts.bind(this);
        this.linkAlerts = this.linkAlerts.bind(this);

    }

    alerts(){
        console.log("alerts")
        return [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ));
    }

    linkAlerts(){
      return   [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              This is a {variant} alert with{' '}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
              like.
            </Alert>
          ));
    }

    render(){
        
        return(
            <div>
            <h1>React bootstrap!</h1>
            <h2>Alerts</h2>
            {this.alerts()}
            <br></br>
            <h2>Link alerts</h2>
            {this.linkAlerts()}
            </div>
        )
    }
}

export default Bootstrap;