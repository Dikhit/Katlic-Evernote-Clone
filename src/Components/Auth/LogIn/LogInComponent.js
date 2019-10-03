import React from 'react';
import  { withRouter } from 'react-router';
import * as firebase from 'firebase';
import { Icon, Button, Input, Card } from 'antd';

//css importing 
import 'antd/dist/antd.css';
import './LogIn.css';

class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error : ""
        };
    
    }

    gotoRegister = () => {
        this.props.history.push('/register', null);
    }
    onSignIn = (e) => {
        const { email, password } = this.state
        var promise = firebase.auth().signInWithEmailAndPassword(email, password)
        promise.catch ( e => {
            var error = e.message;
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            this.setState({
                error : error
            })
        });
    }


    render(){
        return(
                <React.Fragment>
                    <Card title = "Evernote Clone" 
                          style = {{ 
                            width: '60%',
                            marginLeft : 250,
                            marginTop : '10%'
                        }}>
                        <Input 
                            type = 'text'
                            onChange = { e=> this.setState({ email: e.target.value })} 
                            placeholder="Enter your verfied email"  
                        />
                        <Input 
                            type= 'password' 
                            onChange = { e=> this.setState({ password: e.target.value })} 
                            placeholder="Enter your verfied password" 
                            style = {{ marginTop : 5 }}
                        />
                        <span>
                            {this.state.error}
                        </span>
                        <div style = {{ marginTop : 10}}>
                            <Button onClick = {this.onSignIn.bind(this)} >Sign In</Button>
                            <Button style = {{ marginLeft : 5 }} onClick = { this.gotoRegister.bind(this) } >Sign Up</Button>
                        </div>
                        <div style = {{marginTop : 25}}>
                        <span> SignIn with ...  </span>
                            <div style = {{ marginLeft: 200 }}>
                                <Icon type="github" style = {{cursor:'pointer'}}/>
                                <Icon type="facebook" style = {{marginLeft: 10, cursor:'pointer'}}/>
                                <Icon type="google" style = {{marginLeft: 10, cursor:'pointer'}}/>
                                <Icon type="linkedin" style = {{marginLeft: 10, cursor:'pointer'}}/>
                                <Icon type="instagram" style = {{marginLeft: 10, cursor:'pointer'}}/>
                            </div>
                        </div>
                    </Card>                    
                </React.Fragment>
        );
    }
}

let LogInComponent = withRouter(LogIn);
export default LogInComponent;