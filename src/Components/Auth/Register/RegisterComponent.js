import React from 'react';
import { withRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import { Card, Button, Input } from 'antd';

//css importing 
import '../LogIn/LogIn.css';
import 'antd/dist/antd.css';

//module importing
import MainComponent from '../../Main/MainComponent';

class RegisterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email: "",
            isVerifiedUser : false,
            message: ""
        }
    }

    gotoLogIn = () => {
        this.props.history.push('/')
    }

    onCreateUser = () => {
        const { email, password } = this.state;
        const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
        promise
            .then(
                user => {
                    var message = "Welcome " + user.email;
                    // firebase.database().ref('/users' + user.uid).set({
                    //     email: user.email
                    // });
                    console.log('====================================');
                    console.log(user);
                    console.log('====================================');
                    this.setState({
                        message: message
                    });
                }
            ).catch( e => {
                var message = e.message;
                console.log('====================================');
                console.log(message);
                console.log('====================================');
                this.setState({
                    message:message,
                    name: "",
                    email: "",
                    password: ""
                })
            })
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
                {/* <Input 
                    type = 'text'
                    onChange = { e=> this.setState({ name: e.target.value })} 
                    placeholder="Enter your name"  
                /> */}
                <Input 
                    type = 'text'
                    onChange = { e=> this.setState({ email: e.target.value })} 
                    placeholder="Enter your verfied email"  
                    style = {{ marginTop : 5 }}
                />
                <Input 
                    type= 'password' 
                    onChange = { e=> this.setState({ password: e.target.value })} 
                    placeholder="Enter your verfied password" 
                    style = {{ marginTop : 5 }}
                />
                <span> { this.state.message } </span>
                <div style = {{ marginTop : 10}}>
                    <Button onClick = {this.onCreateUser.bind(this)} >SignUp</Button>
                    <Button style = {{ marginLeft : 5 }} onClick = { this.gotoLogIn.bind(this) } >SignIn</Button>
                </div>
            </Card>                    
        </React.Fragment>
        );
    }
}

export default withRouter(RegisterComponent);