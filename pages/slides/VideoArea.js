import React, { useState } from "react";
import { useDispatch } from "react-redux";

function VideoArea() {
  const [showvideo, setshowvideo] = useState(false);
  const dispatch = useDispatch();

  /* const stopMusic = () => {
    // Access the Howl instance and AudioContext from the global window object
    const sound = window.sound;
    const audioCtx = window.audioCtx;

    // Create a new AudioBufferSourceNode and connect it to the AudioContext
    const source = audioCtx.createBufferSource();
    source.connect(audioCtx.destination);

    // Stop the audio when the page unmounts
    source.stop();
  } */

  return (
    <>
      {!showvideo && (
        <div onClick={() => setshowvideo(true)}>
          <img
            src="/slides/10/preview.png"
            alt="Thumbnail, story of Jackson Corley"
            className="jsx-383eab4433b76272"
            width={`100%`}
          />
        </div>
      )}
      {showvideo && (
        <video
          onPlay={(e) => {
            dispatch({
              type: "toggleBgMusic",
              payload: true,
            });
            window.sound.pause();
          }}
          onPause={(e) => {
            dispatch({
              type: "toggleBgMusic",
              payload: false,
            });
          }}
          src="https://flowcdn.octaved.com/temp/incrediwear/jackson_corley.mp4"
          playsInline
          autoPlay
          controls
          className="jsx-383eab4433b76272"
          width={`100%`}
        ></video>
      )}
    </>
  );
}

export default VideoArea;
