import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './SidebarItemStyle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../Helpers/Helpers';

class SidebarItemComponent extends React.Component{

    selectNote = () => {
        console.log('note selection')
    }
    deleteNote = () => {
        console.log('====================================');
        console.log('delete icon is clicked');
        console.log('====================================');
    }
    render(){
        const { note, index, selectedNoteIndex, selectNote, deleteNote, classes } = this.props; 
        return(
            <React.Fragment>
                <div key = { index }>
                    <ListItem
                        className = { classes.listItem }
                        selected = { selectedNoteIndex === index }
                        alignItems = 'flex-start'
                    >
                        <div
                            className = { classes.textSection }
                            onClick = { this.selectNote(note, index) }
                        >
                            <ListItemText
                                primary = { note.title }
                                secondary = { removeHTMLTags(note.body.substring(0, 30) )+ '.....' }
                            >
                            </ListItemText>
                        </div>
                        <DeleteIcon
                            onClick = { () => this.deleteNote(note) }
                            className = { classes.deleteIcon }
                        >

                        </DeleteIcon>
                    </ListItem>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SidebarItemComponent);