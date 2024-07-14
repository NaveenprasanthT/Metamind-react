import React from "react";
import Button from "../../Shared/Button/button";
import ReactPlayer from "react-player";
import Video from '../../../assets/video.mp4'
import "./videoplayer.css";

const MainSection = () => {
  return (
    <div className="videoPlayerContainer">
      <div className="vdotitle">
        <h1>
          We make you <br /> fly <span>
            <div className="strike-line"/>
            higher
          </span> lower
        </h1>
        <p>That's when people see you fly</p>
        <Button buttonTxt={"Contact US"} />
      </div>
      <div className="videoContainer">
        <ReactPlayer controls={true} url={Video} width={"100%"} height={"100%"} />
      </div>
    </div>
  );
};

export default MainSection;