import React from 'react';
import debounce from '../Helpers/Helpers';
import { withStyles } from '@material-ui/core/styles';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Styles from './EditorStyle';

class EditorComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <React.Fragment>
                <div>hey i am from editor</div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(EditorComponent);