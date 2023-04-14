import React, { useState } from "react";
import { useDispatch } from "react-redux";

function VideoArea() {
  const [showvideo, setshowvideo] = useState(false);
  const dispatch = useDispatch();

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
          }}
          onPause={(e) => {
            dispatch({
              type: "toggleBgMusic",
              payload: false,
            });
          }}
          src="https://flowcdn.octaved.com/temp/incrediwear/jackson_corley.mp4"
          playsinline=""
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
