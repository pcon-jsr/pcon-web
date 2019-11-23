import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Experience from "./modal.js";
import samsung from "./samsung.jpg";
import buyhatke from "./buyhatke.jpg";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import { Animated } from "react-animated-css";

import lifecycle from "react-pure-lifecycle";
import RectangularContainer from "../../components/rectangular-container/rectangular-container.component.jsx";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 80,
    height: 80,
    objectFit: "cover"
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    objectFit: "cover"
  },
  largeAvatar: {
    margin: 10,
    width: 150,
    height: 150,
    objectFit: "cover"
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  addExperienceBtn: {
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    backgroundColor: "#038A86",
    color: "white",
    fontSize: "3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "120px",
    right: "40px",
    textDecorationColor: "white",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "5px 5px 35px -12px rgba(0,0,0,0.69)"
    }
  }
});

const featuredPosts = [
  {
    title: "BuyHatke Interview Experience(FTE)",
    date: "Nov 12",
    name: "Sanay Dev",
    src: buyhatke,
    content: "1",
    description: `Round 1: The first round was a coding round on Interviewbit.com..`
  },
  {
    title: "Samsung Interview Experience",
    date: "Nov 11",
    name: "Utkarsh Kulshrestha",
    src: samsung,
    content: "2",
    description: `Online Round : It was a 3 hour
        long contest and we were given one problem to solve.. `
  }
];

const methods = {
  componentDidMount(props) {
    window.scrollTo(0, 0);
  }
};

function Interview(props) {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "90px", width:'100%' , display:'flex', flexDirection:'column', alignItems:'center', }}>
      <div style={{ textAlign: "center", marginBottom:'10px' }}>
        <h1> Interview Experiences</h1>
      </div>
      <div
        onClick={() => {
          props.history.push("/submit-interview-experience");
        }}
        className={classes.addExperienceBtn}
      >
        +
      </div>
      <RectangularContainer>
        {/* Sub featured posts */}
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div style={{ margin: "4%" }}>
            <Grid container spacing={4} className={classes.cardGrid}>
              {featuredPosts.map(post => (
                <Grid item key={post.title} xs={12} md={12}>
                  <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                      <Hidden xsDown>
                        <Avatar
                          alt="picai"
                          src={post.src}
                          className={classes.largeAvatar}
                          style={{ borderRadius: 0 }}
                        />
                      </Hidden>
                      <Hidden smUp>
                        <Avatar
                          alt="picai"
                          src={post.src}
                          className={classes.avatar}
                          style={{ borderRadius: 0 }}
                        />
                      </Hidden>

                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Hidden xsDown>
                            <Typography component="h2" variant="h5">
                              {post.title}
                            </Typography>
                          </Hidden>
                          <Hidden smUp>
                            <Typography component="h2" variant="h6">
                              {post.title}
                            </Typography>
                          </Hidden>

                          <Typography component="h2">by {post.name}</Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {post.date}
                          </Typography>
                          <Typography variant="subtitle1" paragraph>
                            {post.description}
                          </Typography>
                          <Typography variant="subtitle1" color="primary">
                            <Experience {...post} />
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>
          </div>
        </Animated>
        {/* End sub featured posts */}
      </RectangularContainer>

      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
      {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
    </div>
  );
}

export default lifecycle(methods)(Interview);
