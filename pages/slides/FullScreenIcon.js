import React, { useState } from "react";

function FullScreenIcon() {
  const [isFullScreen, setisFullScreen] = useState(false);
  const requestFullscreen = (element = document.documentElement) => {
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setisFullScreen(false);
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        setisFullScreen(false);
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        setisFullScreen(false);
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        setisFullScreen(false);
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
        setisFullScreen(true);
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        setisFullScreen(true);
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        setisFullScreen(true);
      }
    }
  };
  return (
    <>
      <svg
        onClick={() => requestFullscreen()}
        xmlns="http://www.w3.org/2000/svg"
        width="2%"
        viewBox="-2 -2 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        class="jsx-6edcd6c4ce59f1a6 fullScreenIcon"
        opacity="1"
        transformOrigin="12px 12px"
      >
        <rect
          x="-2"
          y="-2"
          width="28"
          height="28"
          rx="4"
          ry="4"
          stroke="none"
          fill="rgba(255,255,255,0.8)"
        ></rect>
        <polyline points="15 3 21 3 21 9"></polyline>
        <polyline points="9 21 3 21 3 15"></polyline>
        <line x1="21" y1="3" x2="14" y2="10"></line>
        <line x1="3" y1="21" x2="10" y2="14"></line>
      </svg>
    </>
  );
}

export default FullScreenIcon;
