import React from 'react';
import { withRouter } from 'react-router';
import SidebarComponent from '../Sidebar/SidebarComponent';
import SidebarItemComponent from '../SidebarItem/SidebarItemComponent';
import EditotComponent from '../Editor/EditotComponent';
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

    render(){
        return(
            <React.Fragment>
                <SidebarComponent 
                    selectedNoteIndex = { this.state.selectedNoteIndex }
                    notes = { this.state.notes }
                />
                <EditotComponent/>
            </React.Fragment>
        );
    }
}

export default withRouter(MainComponent);