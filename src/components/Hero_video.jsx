import React from "react";
import './hero_video.css'
import ReactPlayer from "react-player";
import hero_video from "../air_dn_video/new-Air-Max-Dn.mp4"

export default function Hero_video() {
  return (
    <div className="hero_video">
     <a href="https://www.nike.com/in/w/air-max-dn-5ufej" target="blank">
     <ReactPlayer
        url={hero_video}
        playing={true}
        loop={true}
        controls={false}
        muted="ismuted"
        width="90%"
        height="80%"
      />
     </a>
      </div>
      
    
  );
}
