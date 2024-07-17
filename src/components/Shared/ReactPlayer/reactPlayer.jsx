import React from 'react';
import './reactPlayer.css';
import ReactPlayer from 'react-player';
import { PauseIcon, PlayIcon } from '../svgIcon';

function CustomReactPlayer({ play, file, handlePlay, handlePause }) {
  return (
    <div className="media-player-wrap">
      <ReactPlayer
        playing={play}
        controls={play}
        url={file}
        width={"100%"}
        height={"100%"}
        className="media-player"
        onPause={handlePause}
      />
      <div className="icon-container">
        {play
          ? (
            <span />
          ) : (
            <span onClick={handlePlay} className="play-icon">
              <PlayIcon />
            </span>
          )}
      </div>
    </div>
  );
}

export default CustomReactPlayer;
