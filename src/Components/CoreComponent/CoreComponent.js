import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Suspense = React.Suspense;

//Lazy Component
const LazyLogIn = React.lazy( ()=> import('../Auth/LogIn/LogInComponent') )
const LazyRegister = React.lazy( ()=> import('../Auth/Register/RegisterComponent') )


class CoreComponent extends React.Component{
    render(){
        return(
            <Suspense fallback= { <h1>hey there</h1> } >
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" exact component = {LazyLogIn}/>
                        <Route exact path="/register" exact component = {LazyRegister}/>
                    </Switch>
                </BrowserRouter> 
            </Suspense>   
        );
    }
}

export default CoreComponent;