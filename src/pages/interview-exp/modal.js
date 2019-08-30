import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import {Animated} from "react-animated-css";
import BuyHatke from "./BuyHatke.js";
import Samsung from "./Samsung.js";

const useStyles = makeStyles({
      avatar: {
        margin: 10,
      },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
        
      },
     largeAvatar: {
        margin: 10,
        width: 150,
        height: 150,
        
      },
      card: {
        display: 'flex',
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      },

    });



export default function Experience(props) {
    

      const [open, setOpen] = React.useState(false);
      //const [scroll, setScroll] = React.useState('body');
    
      const handleClickOpen = scrollType => () => {
        setOpen(true);
        //setScroll(scrollType);
      };
    
      function handleClose() {
        setOpen(false);
      }
    
      const classes = useStyles();

      return (
           <div>
            <Button variant="outlined" color="primary"
             onClick={handleClickOpen('paper')} 
             style={{float:'right',margin:'3%',}}> Read More
             </Button>
        <Dialog
        fullScreen={window.innerWidth<=660} open={open} onClose={handleClose} 
      >
        <DialogTitle id="scroll-dialog-title" style={{backgroundColor:'rba(131,241,243)'}} >
        <Grid container justify="center" alignItems="center"
          >

        <Grid  xs={4}>
         {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar} /> */}
      <Avatar alt="picai" src={props.src} 
      className={classes.bigAvatar} style = {{align:'left'}} />
     
      </Grid>

         <Grid  xs={6}  >
    
         <Hidden xsDown>
                      <Typography  >
                        < span style={{fontSize:24 ,fontWeight:80}}> {props.title}</span>
                         </Typography>
                    </Hidden>
                    <Hidden mdUp>
                    <Typography >
                          
                    < span style={{fontSize:18,fontWeight:130}}> {props.title}</span>
                         </Typography>
                    </Hidden>


                        
                        <Typography component="h2" >
                          
                       <span style={{fontSize:16,fontWeight:18}} >  by {props.name}  </span>
                        </Typography>
      </Grid>     
      <Grid  xs={2}>
      {/* <Button  onClick={handleClose} variant="outlined danger" 
      color="red"  >
            Cancel
          </Button>038a86 4a4a4c */}
          <ClearIcon  onClick={handleClose}
          color={'inherit'}
          fontSize={'large'}
           style = {{float:'right'}} />
      </Grid> 
    </Grid>

              </DialogTitle>
              <DialogContent>
        {props.content=='1'?<BuyHatke/>:<Samsung/>}
         {/* <BuyHatke/> */}
         {/* <Samsung/> */}
         </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </div>
          );

}
