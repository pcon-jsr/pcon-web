import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  I from "./images/Induction/I.jpg";
import  J from "./images/Induction/J.jpg";
import  K from "./images/Induction/K.jpg";
import  L from "./images/Induction/L.jpg";
import  M from "./images/Induction/M.jpg";
import  N from "./images/Induction/N.jpg";
import  O from "./images/Induction/O.jpg";
import  P from "./images/Induction/P.jpg";
import  Q from "./images/Induction/Q.jpg";
import  R from "./images/Induction/R.jpg";

import  A from "./images/Induction/A.jpg";
import  B from "./images/Induction/B.jpg";
import  C from "./images/Induction/C.jpg";
import  D from "./images/Induction/D.jpg";
import  E from "./images/Induction/E.jpg";
import  F from "./images/Induction/F.jpg";
import  G from "./images/Induction/G.jpg";
import  H from "./images/Induction/H.jpg";
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
 // const maxSteps = tutorialSteps.length;

  // function handleNext() {
  //   setActiveStep(prevActiveStep => prevActiveStep + 1);
  // }

  // function handleBack() {
  //   setActiveStep(prevActiveStep => prevActiveStep - 1);
  // }

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
