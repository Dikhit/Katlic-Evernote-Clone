import React from 'react';
import debounce from '../Helpers/Helpers';
import { withStyles } from '@material-ui/core/styles';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Styles from './EditorStyle';

class SidebarComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>hello from side bar</div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SidebarComponent);