import React from "react";
import {Typography, useMediaQuery} from '@mui/material';


export default function MainSection({ src, title, subtitle, light, id }) {
  const is1050pxBreakpointHit = useMediaQuery("(max-width: 1050px)");
  const imageSize = '30vh';

  return (
    <div className={"section" + (light ? " section-light" : " section-dark")}>
      {is1050pxBreakpointHit ? <div className="main-section-content" id={id}>
        <img alt="Yatharth Kumar" src={src} style={{width:imageSize, height:imageSize, aspectRatio: "1/1", borderRadius: "1000rem", objectFit: "cover"}} />
          <Typography variant="h2" align='left' color={'#ffe8b0'} marginLeft='0' gutterBottom position={'center'} style={{width: '100%', marginBottom: '0'}}>{title}</Typography>
		      <Typography variant="h4" align='left' color={'#ffffff'} paragraph marginTop='0.5vh'>{subtitle}</Typography> 
      </div>
      :
      <div className="main-section-content" id={id}>
        <img alt="Yatharth Kumar" src={src} style={{width:imageSize, height:imageSize, aspectRatio: "1/1", borderRadius: "1000rem", objectFit: "cover"}} />
        <div>
          <Typography variant="h2" align='left' color={'#ffe8b0'} marginLeft='0' gutterBottom position={'center'}>{title}</Typography>
		      <Typography variant="h4" align='left' color={'#ffffff'} paragraph marginTop='0.5vh'>{subtitle}</Typography> 
        </div>
      </div>}
    </div>
  );
}
