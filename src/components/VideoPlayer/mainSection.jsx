import React, { useState } from "react";
import Button from "../Button/button";
import "./videoplayer.css";
import ReactPlayer from "react-player";
import Video from '../../assets/video.mp4'
// import PlayIcon from "../../assets/svg/playIcon";

const MainSection = () => {

    // const [play,setPlay] = useState(false);

    // const handleClick = () => {
    //     setPlay(!play)
    // }
   return (
    <div className="videoPlayerContainer">
      <div className="vdotitle">
        <h1>
          We make you fly <span>higher</span> lower
        </h1>
        <p>That’s when people see you fly</p>
        <Button buttonTxt={"Contact US"} />
      </div>
      <div className="videoContainer">
        <ReactPlayer controls={true} url={Video} width={1000} height={"100%"}/>
        {/* <div onClick={handleClick}><PlayIcon/></div> */}
      </div>
    </div>
  );
};

export default MainSection;