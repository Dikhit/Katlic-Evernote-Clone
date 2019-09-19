import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './SidebarItemStyle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../Helpers/Helpers';

class SidebarItemComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>hello from side bar item</div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SidebarItemComponent);