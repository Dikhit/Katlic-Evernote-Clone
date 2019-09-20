import React from 'react';
import debounce from '../Helpers/Helpers';
import { withStyles } from '@material-ui/core/styles';
// import BorderColorIcon from '@material-ui/icons/BorderColor';
import Styles from './EditorStyle';
import ReactQuill from 'react-quill';

class EditorComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : '',
            title: '',
            id: ''
        };
    }

    updateBody = async val => {
        await this.setState({
            text: val
        })
        this.update();
    }

    update = debounce( () => {
        console.log('====================================');
        console.log('updating database');
        console.log('====================================');
    }, 1500);
    render(){
        const  { classes } = this.props;
        return(
            <React.Fragment>
                <div className = {classes.editorContainer}>
                    <ReactQuill
                        value = { this.state.text }
                        onChange = {this.updateBody}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(EditorComponent);