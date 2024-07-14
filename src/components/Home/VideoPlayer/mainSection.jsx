import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../Shared/Button/button";
import ReactPlayer from "react-player";
import Video from '../../../assets/video.mp4'
import "./videoplayer.css";
import { PauseIcon, PlayIcon } from "../../../assets/svg/playIcon";

const MainSection = () => {
  const [play,setPlay] = useState(false);

  const handleClick = () => {
    setPlay(!play)
  }

  return (
    <div className="videoPlayerContainer">
      <motion.div
        className="vdotitle"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
      >
        <h1>
          We make you <br /> fly <span>
            <div className="strike-line" />
            higher
          </span> lower
        </h1>
        <p>That's when people see you fly</p>
        <Button buttonTxt={"Contact US"} />
      </motion.div>
      <motion.div
        className="videoContainer"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ReactPlayer url={Video} width={"100%"} height={"100%"} playing={play}/>
        <div onClick={handleClick} className="iconContainer">{play ? <PauseIcon /> : <PlayIcon />}</div>
      </motion.div>
    </div>
  );
};

export default MainSection;