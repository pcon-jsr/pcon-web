import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SwipeableTextMobileStepper from "./photoGallery3";
import FullScreenDialog from "./modal3";
const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth:400
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} raised={true}>
    <CardContent style={{padding:4}} >

      
      <SwipeableTextMobileStepper />



      <Typography align='center'  variant="h5" color="textSecondary" gutterBottom>
        Induction 2k17 and 2k18
      </Typography>
      <Typography align='center'  variant="h5" color="textSecondary" gutterBottom>
        <FullScreenDialog />
      </Typography>
    </CardContent>
     
  </Card>
  );
}
