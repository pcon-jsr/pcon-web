import React from 'react';

import Grid from "@material-ui/core/Grid";
import SimpleCard from "./Card";
import SimpleCard2 from "./Card2";
import SimpleCard3 from "./Card3";
import RectangularContainer from '../../components/rectangular-container/rectangular-container.component';




class Gallery extends React.Component {

    componentDidMount() {

        window.scrollTo(0, 0);
    }


    render() {
        const cardGridStyles={
             
             maxHeight:'100%',
             display:'flex',
             justifyContent:'center',
        };

        return (
            <div style={{ marginTop: 90, width:'100%', marginBottom: 70, display:'flex', flexDirection:'column', alignItems:'center', }}>
                <div style={{ width: '100%', height: '6rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem' }}>Gallery</h1>
                </div>
                <RectangularContainer>
                    <Grid container spacing={4} style={{ marginBottom: 10, maxWidth:'100%', }} alignItems="center" justify='center'>
                        <Grid style={cardGridStyles} item xs={12} md={4} >
                            <SimpleCard />
                        </Grid>
                        <Grid style={cardGridStyles} item xs={12} md={4} >
                            <SimpleCard2 />
                        </Grid>
                        <Grid style={cardGridStyles} item xs={12} md={4} >
                            <SimpleCard3 />
                        </Grid>
                    </Grid>
                </RectangularContainer>
            </div>
        )
    }
}

export default Gallery;