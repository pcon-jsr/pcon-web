import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  X from "./images/hackathon/X.JPG";
import  Y from "./images/hackathon/Y.JPG";
import  Z from "./images/hackathon/Z.JPG";
import  A from "./images/hackathon/A.JPG";
import  B from "./images/hackathon/B.JPG";
import  C from "./images/hackathon/C.JPG";
import  D from "./images/hackathon/D.JPG";
import  E from "./images/hackathon/E.JPG";
import  F from "./images/hackathon/F.JPG";
import  G from "./images/hackathon/G.JPG";
import  H from "./images/hackathon/H.JPG";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:X
      
  },
  {
    label: 'Bird',
    imgPath:Y
     
  },
  {
    label: 'Bali, Indonesia',
    imgPath:Z
      
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
