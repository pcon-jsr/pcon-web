import React from 'react';

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SimpleCard from "./Card";
import SimpleCard2 from "./Card2";
import SimpleCard3 from "./Card3";




class Gallery extends React.Component{

    componentDidMount() {
        
        window.scrollTo(0,0);
    }
    

    render() {
        return (
            <Container style={{marginTop:90, marginBottom:70}}>
                <div style={{width:'100%',height:'6rem', textAlign:'center'}}>
                    <h1 style={{fontSize:'2.5rem'}}>Gallery</h1>
                </div>
      <Grid container spacing={4} style={{marginBottom:10}} alignItems="center">

      <Grid item  xs={12} md={4} >
      
      <SimpleCard/>
      
    
      </Grid>

      <Grid item  xs={12} md={4} >
      <SimpleCard2/>
      </Grid>
      

      
      <Grid item  xs={12} md={4} >
      <SimpleCard3/>
      </Grid>

      </Grid>

      </Container>
        )
    }
}

export default Gallery;