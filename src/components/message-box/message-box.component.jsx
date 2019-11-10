import React from 'react';
import './message-box.styles.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { ReactComponent as SendIcon } from '../../assets/message-send.svg';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({

    textField: {

        width: 250,
        height:'90%'

    },
    button:{
        width:80,
        display:'flex',
        justifyContent: 'space-around'
    }
}));

const MessageBox = () => {
    const classes = useStyles();
    return (
        <div className='message-box'>
            <div className='title'>
                <p>MESSAGE US</p>
            </div>

            <form className='body' noValidate autoComplete="off">

                <div style={{height:'20%',display:'flex',
        justifyContent: 'space-around'}}>
                    <TextField
                        id="name"
                        className={classes.textField}
                        label="Name"
                        type="text"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div  style={{height:'20%',display:'flex',
        justifyContent: 'space-around'}}>
                    <TextField
                        id="email"
                        className={classes.textField}
                        label="Email"
                        type="email"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div  style={{height:'40%',display:'flex',
        justifyContent: 'space-around'}}>
                    <TextField
                        id="messsage"
                        label="Message"
                        multiline
                        rows="6"

                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <Button
                    variant="contained"
                     
                    className={classes.button}
                   style={{width:'110px', marginTop:'25px', background:'#038A86', color:'#fff'}}
                >
                    Send
                    <SendIcon style={{width:'20px'}}/>
                </Button>
            </form>

        </div>
    )
}

export default MessageBox;
