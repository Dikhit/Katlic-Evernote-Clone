import React from 'react';
import { withRouter } from 'react-router-dom';

import '../LogIn/LogIn.css';

class RegisterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email: "",
            contactNumber: ""
        }
    }
    gotoLogIn = () => {
        this.props.history.push('/')
    }

    gotoMain = () => {
        this.props.history.push('/evernote')
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
                                    type="text" 
                                    name="" 
                                    placeholder="Contact Number"
                                />

                                <input 
                                    type="text" 
                                    name="" 
                                    placeholder="email"
                                />

                                <input 
                                    type="password" 
                                    name="" 
                                    placeholder="UserPassword"
                                />

                                <input 
                                    type="submit" 
                                    name="" 
                                    value="register"
                                    onClick = { this.gotoMain }
                                />
                                <span onClick = {this.gotoLogIn}> Sign In</span>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter(RegisterComponent);