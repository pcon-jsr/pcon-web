import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  I from "./images/Workshop/I.JPG";
import  J from "./images/Workshop/J.JPG";
import  K from "./images/Workshop/K.JPG";
import  L from "./images/Workshop/L.JPG";
import  M from "./images/Workshop/M.JPG";
import  N from "./images/Workshop/N.JPG";
import  O from "./images/Workshop/O.JPG";
import  P from "./images/Workshop/P.JPG";
import  Q from "./images/Workshop/Q.JPG";
import  R from "./images/Workshop/R.JPG";
import  S from "./images/Workshop/S.JPG";
import  T from "./images/Workshop/T.JPG";
import  A from "./images/Workshop/A.JPG";
import  B from "./images/Workshop/B.JPG";
import  C from "./images/Workshop/C.JPG";
import  D from "./images/Workshop/D.JPG";
import  E from "./images/Workshop/E.JPG";
import  F from "./images/Workshop/F.JPG";
import  G from "./images/Workshop/G.JPG";
import  H from "./images/Workshop/H.JPG";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:I
      
  },
  {
    label: 'Bird',
    imgPath:J
     
  },
  {
    label: 'Bali, Indonesia',
    imgPath:K
      
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:A
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:B
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:C
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:D
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:E
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:F
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:G
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:H
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:L
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:M
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:N
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:O
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:P
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:Q
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:R
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:S
     
  },
  {
    label: 'Goč, Serbia',
    imgPath:T
     
  }

];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <DotsMobileStepper /> */}
    </div>
  );
}

export default SwipeableTextMobileStepper;
