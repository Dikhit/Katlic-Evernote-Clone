import React from 'react';
// import debounce from '../Helpers/Helpers';
import { withStyles } from '@material-ui/core/styles';
// import BorderColorIcon from '@material-ui/icons/BorderColor';
import Styles from './SidebarStyle';
import { Divider, Button, List} from '@material-ui/core';
import SidebarItemComponent from '../SidebarItem/SidebarItemComponent';

class SidebarComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addingNotes : false,
            title : null
        };
    }

    newNoteButtonClick = () => {
        this.setState({
            title : null,
            addingNotes : !this.state.addingNotes,
        })
    }
    
    updateTitle = title => {
        this.setState({ title: title })
        console.log(title)
    }

    newNote = () => {
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
    }

    deleteNote = () => {
        console.log('delete the note ')
    }

    

    render(){
        const { classes, notes, selectedNoteIndex, selectNote, deleteNote, newNote } = this.props;
        if ( notes ){
            return(
                <React.Fragment>
                    <div className = { classes.sidebarContainer }>
                        <Button 
                            onClick = { this.newNoteButtonClick }
                            className = { classes.newNoteBtn }
                            style = {{ cursor : 'pointer' }}
                        > 
                        {
                            this.state.addingNotes ? 'cancel' : 'New Note'
                        }
                        </Button>
                        {
                            this.state.addingNotes ? 
                            <div>   
                                <input 
                                    type = "text"
                                    className =  { classes.newNoteInput }
                                    placeholder = "Enter note title"
                                    onKeyUp = { e => this.updateTitle(e.target.value)}
                                />
                                <Button 
                                    className = { classes.newNoteSubmitBtn }
                                    onClick = { this.newNote }
                                > Submit Notes </Button>
                            </div> : 
                            <div/>
                        }
                        <List>
                            {
                                this.props.notes.map( (note, index) => {
                                    return (
                                        <div key = { index } >
                                            <SidebarItemComponent
                                                note  = { note }
                                                index = { index }
                                                selectedNoteIndex = { selectedNoteIndex }
                                                selectNoteFinal = { this.selectNoteFinal}
                                                deleteNote = { this.deleteNote }
                                            />
                                            <Divider></Divider>
                                        </div>
                                    )
                                })
                            }
                        </List>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <div/>
            )
        } 
    }

    selectNoteFinal = (note,  index) => {
        this.props.selectNote(note, index);
    }
}

export default withStyles(Styles)(SidebarComponent);