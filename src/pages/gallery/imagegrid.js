import React from 'react';
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
import Gallery from 'react-grid-gallery';
 
const IMAGES =
[{
        src: X,
        thumbnail:X,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        
      
},
{
        src:Y ,
        thumbnail: Y,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
      
},
 
{
        src: Z,
        thumbnail: Z,
        thumbnailWidth: 320,
        thumbnailHeight: 212
}

,
{
        src: A,
        thumbnail: A,
        thumbnailWidth: 320,
        thumbnailHeight: 212
},

{
        src: B,
        thumbnail: B,
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: C,
        thumbnail: C,
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: D,
        thumbnail: D,
        thumbnailWidth: 320,
        thumbnailHeight: 212
}
,
{
        src: E,
        thumbnail: E,
        thumbnailWidth: 320,
        thumbnailHeight: 212
}
,
{
        src: F,
        thumbnail: F,
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: G,
        thumbnail: G,
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: H,
        thumbnail: H,
        thumbnailWidth: 320,
        thumbnailHeight: 212
}














]

export default function GridI(){
    return  <Gallery images={IMAGES}/>;
    
}


