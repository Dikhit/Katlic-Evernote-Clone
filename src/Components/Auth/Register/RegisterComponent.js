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
    render(){
        return(
                <div className="body">
                    <div className="container">
                        <div class="signIn">
                            Ever Note Clone
                        </div>
                        <div class="fold katlic">
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
                                />
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter(RegisterComponent);