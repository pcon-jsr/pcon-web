import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Box } from "@material-ui/core";
import Panel from "./Panel";
import RectangularContainer from '../../components/rectangular-container/rectangular-container.component';

const useStyles = makeStyles({
  tabsContainer:{
    width:600,
    maxWidth:"90%",
  }
});

export default function Activities() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  React.useEffect(() => {
   window.scrollTo(0,0);
    
  });

  return (
    <div
      style={{
        marginTop: "60px",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: "center",
        textAlign: "center",
        width: "100%"
      }}
    >
      
      <RectangularContainer>
        <h1 style={{ marginBottom: '3rem'}}>ACTIVITIES</h1>
        <h2> COMING SOON...</h2>
        {/* <Paper className={classes.tabsContainer}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab
              label="Past Activities"
              style={{ fontSize: "15px", width:"33.3%", }}
              index={0}
            />
            <Tab
              label="Ongoing Activities"
              style={{ fontSize: "15px", width:"33.3%", }}
              index={1}
            />
            <Tab
              label="Upcoming Activities"
              style={{ fontSize: "15px", width:"33.3%", }}
              index={2}
            />
          </Tabs>
        </Paper>
        <Box component="span" style={{ textAlign: "center" }}>
          <Typography>
            {value === 0 ? (
              <div style={{ height: "50vh" }}>
               
                <br />
                <Panel title="title" />
                <Panel title="title2" />
              </div>
            ) : null}

            {value === 1 ? (
              <div style={{ height: "50vh" }}>
                
                <br />
                <Panel title="title3" />
                <Panel title="title4" />
              </div>
            ) : null}

            {value === 2 ? (
              <div style={{ height: "50vh" }}>
                
                <br />
                <Panel title="title5" />
                <Panel title="title6" />
              </div>
            ) : null}
          </Typography>
        </Box> */}
      </RectangularContainer>
    </div>
  );
}
