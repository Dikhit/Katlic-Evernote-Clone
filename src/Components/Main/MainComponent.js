import React from 'react';
import { withRouter } from 'react-router';
const firebase = require('firebase');
class MainComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedNoteIndex : null,
            selectedNote : null,
            notes : null
        };
    }

    componentDidMount(){
        firebase.firestore().collection('notes').onSnapshot(serverUpdate => {
            const notes = serverUpdate.docs.map( _doc => {
                const data  = _doc.data();
                data['id'] = _doc.id;
                return data;
            });
            console.log(notes);
            this.setState({ notes : notes });
        });
    }

    render(){
        return(
            <React.Fragment>
                <h1>hey there where are you</h1>
            </React.Fragment>
        );
    }
}

export default withRouter(MainComponent);