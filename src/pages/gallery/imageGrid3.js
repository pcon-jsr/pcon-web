import React from 'react';
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

import Gallery from 'react-grid-gallery';

 
const IMAGES =
[{
        src: I,
        thumbnail:I,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        
      
},
{
        src:J ,
        thumbnail: J,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
      
},
 
{
        src: K,
        thumbnail: K,
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

,
{
    src: L,
    thumbnail: L,
    thumbnailWidth: 320,
    thumbnailHeight: 212
}
,
{
    src: M,
    thumbnail: M,
    thumbnailWidth: 320,
    thumbnailHeight: 212
}
,
{
    src: N,
    thumbnail: N,
    thumbnailWidth: 320,
    thumbnailHeight: 212
}

,
{
    src: O,
    thumbnail: O,
    thumbnailWidth: 320,
    thumbnailHeight: 212
}
,
{
    src: P,
    thumbnail: P,
    thumbnailWidth: 320,
    thumbnailHeight: 212
}
,
{
    src: Q,
    thumbnail: Q,
    thumbnailWidth: 320,
    thumbnailHeight: 212
}
,
{
    src: R,
    thumbnail: R,
    thumbnailWidth: 320,
    thumbnailHeight: 212
}














]

export default function GridI(){
    return  <Gallery images={IMAGES}/>;
    
}


