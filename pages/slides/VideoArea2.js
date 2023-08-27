import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

function VideoArea() {
  const [showvideo, setshowvideo] = useState(false);
  const dispatch = useDispatch();
  const videoRef = useRef(null);


  return (
    <>
      {/* {!showvideo && (
        <div onClick={() => setshowvideo(true)}>
          <img
            src="/slides/32/preview_2.jpg"
            alt="Thumbnail, story of Jackson Corley"
            className="jsx-383eab4433b76272"
            width={`100%`}
            id="jackson_video_img_2"
          />
        </div>
      )}
      {showvideo && (
        <video
         ref={videoRef}
          onPlay={(e) => {
            dispatch({
              type: "toggleBgMusic",
              payload: true,
            });
            videoRef.current.muted = false;
            videoRef.current.play();
          }}
          onPause={(e) => {
            dispatch({
              type: "toggleBgMusic",
              payload: false,
            });
          }}
          src="/slides/32/Incrediwear_vs_compression.mp4"
          playsInline
          autoPlay
          controls
          className="jsx-383eab4433b76272"
          width={`100%`}
          id="jackson_video_2"
        ></video>
        
      )} */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3femDPgYThY?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

    </>
  );
}

export default VideoArea;
