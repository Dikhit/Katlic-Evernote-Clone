import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Suspense = React.Suspense;

//Lazy Component
const LazyLogIn = React.lazy( ()=> import('../Auth/LogIn/LogInComponent') )
const LazyRegister = React.lazy( ()=> import('../Auth/Register/RegisterComponent') )
const MainLazyComponent = React.lazy( ()=> import('../Main/MainComponent') )


class CoreComponent extends React.Component{
    render(){
        return(
            <Suspense fallback= { <span>Loading...Please Wait</span> } >
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component = {LazyLogIn}/>
                        <Route exact path="/register" component = {LazyRegister}/>
                        <Route exact path="/evernote" component = {MainLazyComponent}/>
                    </Switch>
                </BrowserRouter> 
            </Suspense>   
        );
    }
}

export default CoreComponent;