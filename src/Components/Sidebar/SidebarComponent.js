import React from 'react';
import debounce from '../Helpers/Helpers';
import { withStyles } from '@material-ui/core/styles';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Styles from './SidebarStyle';
import { Divider, Button } from '@material-ui/core';

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
        console.log('====================================');
        console.log('title is ', title);
        console.log('====================================');
    }
    render(){
        const { classes, notes, selectedNoteIndex } = this.props;
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
                        </div> : 
                        <div/>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(SidebarComponent);