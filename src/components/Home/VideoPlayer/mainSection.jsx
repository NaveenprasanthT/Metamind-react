import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../Shared/Button/button";
import Video from '../../../assets/video.mp4'
import "./videoplayer.css";
import CustomReactPlayer from "../../Shared/ReactPlayer/reactPlayer";

const MainSection = () => {
  const [playingVideo, setPlayingVideo] = useState(false);

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
        <CustomReactPlayer
          play={playingVideo}
          file={Video}
          handlePlay={() => setPlayingVideo(true)}
          handlePause={() => setPlayingVideo(false)}
        />
      </motion.div>
    </div>
  );
};

export default MainSection;