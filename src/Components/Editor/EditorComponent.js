import React from 'react';
import debounce from '../Helpers/Helpers';
import { withStyles } from '@material-ui/core/styles';
import BorderColorIcon from '@material-ui/icons/BorderColor';
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

    // componentDidMount = () => {
    //     this.setState({
    //       text: this.props.selectedNote.body,
    //       title: this.props.selectedNote.title,
    //       id: this.props.selectedNote.id
    //     });
    // }

    // componentDidUpdate = () => {
    //     if(this.props.selectedNote.id !== this.state.id) {
    //       this.setState({
    //         text: this.props.selectedNote.body,
    //         title: this.props.selectedNote.title,
    //         id: this.props.selectedNote.id
    //       });
    //     }
    //   }
      
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

    updateTitle = async text => {
        await this.setState({
            title : text
        });
        this.update();
    }

    render(){
        const  { classes } = this.props;
        return(
            <React.Fragment>
                <div className = {classes.editorContainer}>
                <BorderColorIcon 
                    className={classes.editIcon}
                />
                <input
                    className={classes.titleInput}
                    placeholder='Note title...'
                    value={this.state.title ? this.state.title : ''}
                    onChange={(e) => this.updateTitle(e.target.value)}
                />
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