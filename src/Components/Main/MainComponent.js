import React from 'react';
import { withRouter } from 'react-router';
import SidebarComponent from '../Sidebar/SidebarComponent';
import EditotComponent from '../Editor/EditorComponent';
import * as firebase from 'firebase';

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


    newNote = async note => {
        const note = {
            title: title,
            body : ''
        };
        const newFromDB = await firebase.firestore().collection('notes').add({
            tittle: note.title,
            body: note.body,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        const newID = newFromDB.id;
        await this.setState({
            notes: [ ...this.state.notes, notes ]
        });
        const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter( (note ) => note.id === newID)[0]);
        this.setState({
            selectedNote : this.state.notes[newNoteIndex],
            selectedNoteIndex: newNoteIndex
        })
    }

    noteUpdate = (id, noteObj) => {
        firebase.firestore().collection('notes').doc(id).update({
            tittle:noteObj.tittle,
            body: noteObj.body,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    selectNote = (note, index) => {
        this.setState({
            selectedNoteIndex: index,
            selectNote : note
        });
        console.log('====================================');
        console.log(this.state.selectedNoteIndex);
        console.log('====================================');
    }

    deleteNote = () => {
        console.log('delete the note ')
    }


    render(){
        return(
            <React.Fragment>
                <div className = "app-container">
                    <SidebarComponent 
                        selectedNoteIndex = { this.state.selectedNoteIndex }
                        notes = { this.state.notes }
                        deleteNote = { this.deleteNote }
                        selectNote = { this.selectNote }
                        newNote = { this.newNote }
                    />
                    
                    {
                        this.state.selectedNoteIndex ? 
                            <EditotComponent
                            selectedNote = { this.state.selectedNote }
                            selectedNoteIndex = { this.state.selectedNoteIndex }
                            notes = { this.state.notes }
                            />
                        : 
                            null 
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(MainComponent);