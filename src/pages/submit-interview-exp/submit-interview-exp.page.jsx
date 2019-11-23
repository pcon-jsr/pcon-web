import React, { Component } from 'react';
import './submit-interview-exp.styles.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RectangularContainer from '../../components/rectangular-container/rectangular-container.component';


const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': ['#fff', 'red', 'blue', 'green', 'purple', 'orange', 'black', 'grey'] }, { 'background': ['#fff', 'red', 'blue', 'green', 'purple', 'orange', 'black', 'grey'] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];





export class SubmitInterviewExp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            text: '',
        }


    }

    handleChangeText = (value) => {
        this.setState({ text: value })
    }

    handleChangeForm = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        return (
            <div className='submit-interview-exp'>
                <div className='title'>
                    <h1>Submit Your Interview Experience</h1>
                </div>
                <RectangularContainer>
                    <div className='personal-info'>
                        <TextField
                            id="filled-name"
                            label="Name"
                            style={{

                                width: (window.maxWidth <= 660) ? '45%' : '100%',
                                height: '70px',
                                margin: '1rem',

                            }}
                            inputProps={{
                                style: {
                                    color: "black",
                                    borderColor: 'white',
                                }
                            }}
                            value={this.state.name}
                            onChange={this.handleChangeForm('name')}
                            margin="normal"

                        />
                        <TextField
                            id="filled-email-input"
                            label="Email"
                            style={{

                                width: (window.maxWidth <= 660) ? '45%' : '100%',
                                height: '70px',
                                margin: '1rem'
                            }}
                            className='textField'
                            value={this.state.email}
                            onChange={this.handleChangeForm('email')}
                            margin="normal"
                        />
                    </div>
                    <div className='input-editor'>

                        <ReactQuill
                            style={{
                                width: '100%',
                                height: '80%',
                                marginBottom: '2rem'
                            }}

                            modules={{
                                toolbar: toolbarOptions
                            }}
                            theme="snow"
                            placeholder="Write your experience here..."
                            value={this.state.text}
                            onChange={this.handleChangeText} />
                    </div>
                    <div className='btn-div'>
                        <div  className='submit-btn'>
                            Submit
                        </div>
                    </div>

                </RectangularContainer>
            </div>
        )
    }
}

export default SubmitInterviewExp;
