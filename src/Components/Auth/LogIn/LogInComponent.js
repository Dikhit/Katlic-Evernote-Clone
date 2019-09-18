import React from 'react';
import  { withRouter } from 'react-router-dom';

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
        this.props.history.push('/resgiter');
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
                                    type="password" 
                                    name="" 
                                    placeholder="UserPassword"
                                />

                                <input 
                                    type="submit" 
                                    name="" 
                                    value="LogIn"
                                />
                                <a href="#"> create an account</a>
                                <a href="#"> Forgot password</a>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}

let LogInComponent = withRouter(LogIn);
export default LogInComponent;