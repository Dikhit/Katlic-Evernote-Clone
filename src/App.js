import React from 'react';
import './App.css';
import CoreComponent from './Components/CoreComponent/CoreComponent';

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <CoreComponent/>
      </React.Fragment>
    );
  }
}

export default App;
