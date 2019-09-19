import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAEv3WP56C1Q28S_iKsLXTDZmNVyczWrmc",
    authDomain: "ever-note-clone.firebaseapp.com",
    databaseURL: "https://ever-note-clone.firebaseio.com",
    projectId: "ever-note-clone",
    storageBucket: "ever-note-clone.appspot.com",
    messagingSenderId: "587602277176",
    appId: "1:587602277176:web:ce4408153dcdc5b7f347cd"
  };
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
