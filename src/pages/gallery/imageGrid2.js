import React from 'react';
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

,
{
    src: S,
    thumbnail: S,
    thumbnailWidth: 320,
    thumbnailHeight: 212
}
,
{
    src: T,
    thumbnail: T,
    thumbnailWidth: 320,
    thumbnailHeight: 212
}












]

export default function GridI(){
    return  <Gallery images={IMAGES}/>;
    
}


