import React, { useEffect, useState } from 'react';
import './message-box.styles.css';
import firebase from "./data.js";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import { ReactComponent as SendIcon } from '../../assets/message-send.svg';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({

    textField: {

        width: 250,
        height: '90%'

    },
    button: {
        width: 80,
        display: 'flex',
        justifyContent: 'space-around'
    }
}));



function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}











const MessageBox = () => {
    const classes = useStyles();

    let [msg, setMsg] = useState({
        email: '',
        message: '',
        name: '',
    });

    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);




    const handleClick = Transition => () => {
        setTransition(() => Transition);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };







    const mySubmitHandler = (event) => {
        event.preventDefault();
    }



    const nameHandler = (event) => {

        setMsg({
            ...msg,
            name: event.target.value
        })
    }

    const emailHandler = (event) => {
        setMsg({
            ...msg,
            email: event.target.value
        })
    }

    const msgHandler = (event) => {
        setMsg({
            ...msg,
            message: event.target.value
        })
    }


    const check = () => {
        //let numbers = /^[0-9]+$/;
        let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (msg.email === "" || !regEx.test(String(msg.email).toLowerCase()))
            return false;
        if (msg.name === "")
            return false;
        if (msg.message === "")
            return false;

        return true;
    }



    const pushDetails = () => {
        var d = new Date();
        var n = d.toString();
        console.log(msg);
        let x = {
            ...msg,
            time: n
        }


        if (check()) {
            firebase.database().ref("/messages").push(
                x
            )
                .then((res) => {
                    //   alert("successfully added");
                    handleClick(TransitionLeft)();
                    console.log("response", res);
                    setMsg({
                        ...msg,
                        email: "",
                        name: "",
                        message: ""
                    })
                });
        }
        else {
            alert("please enter the details correctly");
        }

        // .once('value',(snap)=> {
        //     console.log(snap.val());
        // });

    }


    return (
        <div className='message-box'>
            <div className='title'>
                <p>MESSAGE US</p>
            </div>

            <form className='body' onSubmit={mySubmitHandler} noValidate autoComplete="off">

                <div style={{
                    height: '20%', display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <TextField
                        id="name"
                        className={classes.textField}
                        label="Name"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        onChange={nameHandler}

                        value={msg.name}
                    />
                </div>
                <div style={{
                    height: '20%', display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <TextField
                        id="email"
                        className={classes.textField}
                        label="Email"
                        type="email"
                        margin="normal"
                        variant="outlined"

                        onChange={emailHandler}
                        value={msg.email}
                    />
                </div>
                <div style={{
                    height: '40%', display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <TextField
                        id="messsage"
                        label="Message"
                        multiline
                        rows="6"
                        onChange={msgHandler}

                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={msg.message}
                    />
                </div>
                <Button
                    variant="contained"
                    onClick={pushDetails}
                    className={classes.button}
                    style={{ width: '110px', marginTop: '25px', background: '#038A86', color: '#fff' }}
                >
                    Send
                    <SendIcon style={{ width: '20px' }} />
                </Button>
            </form>
            <div>
                {/* <Button onClick={handleClick(TransitionLeft)}>Right</Button> */}

                <Snackbar
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={transition}
                    classes={{ color: "white", backgroundColor: "green" }}
                    ContentProps={{
                        'aria-describedby': 'message-id'

                    }}
                    message={<span id="message-id">successfully added</span>}
                />
            </div>
        </div>
    )
}

export default MessageBox;
