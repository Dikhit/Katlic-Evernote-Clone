import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './SidebarItemStyle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../Helpers/Helpers';

class SidebarItemComponent extends React.Component{
    render(){
        const { note, index, selectedNoteIndex, selectNoteFinal, deleteNote, classes } = this.props;
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
                            onClick = { (note, index) => {this.props.selectNoteFinal(note, index);
                                console.log(`index is  ${index}`)}        
                            }
                        >
                            <ListItemText
                                primary = { note.title }
                                secondary = { removeHTMLTags(note.body.substring(0, 30) )+ '.....' }
                            >
                            </ListItemText>
                        </div>
                        <DeleteIcon
                            onClick = { (note) => {
                                if (window.confirm(`Are you seriously delete ${note.title}`)){
                                    this.props.deleteNote(note);
                                }
                            }}
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