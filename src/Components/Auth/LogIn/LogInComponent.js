import React from 'react';
import  { withRouter } from 'react-router';

import './LogIn.css';

class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email: "",
            contactNumber: ""
        }
    }

    gotoRegister = () => {
        this.props.history.push('/register', null);
    }
    gotoMain = () => {
        this.props.history.push('/evernote', null);
    }
    render(){
        return(
                <div className="body">
                    <div className="container">
                        <div className="signIn">
                            Ever Note Clone
                        </div>
                        <div className="fold katlic">
                            <form>
                                <input 
                                    type="text" 
                                    name="" 
                                    placeholder="UserName"
                                />
                                <input 
                                    type="password" 
                                    name="" 
                                    placeholder="UserPassword"
                                />

                                <input 
                                    type="submit" 
                                    name="" 
                                    value="LogIn"
                                    onClick = { this.gotoMain }
                                />
                                <span onClick = {this.gotoRegister} > Create Account </span>
                                <span> Forgot password</span>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}

let LogInComponent = withRouter(LogIn);
export default LogInComponent;