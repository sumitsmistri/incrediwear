import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import useAudio from "./../../shared/useAudio";
import Loader from "../../shared/Loader";
import FullScreenIcon from "./FullScreenIcon";
import { useDispatch, useSelector } from "react-redux";

function Slide_01() {
  const dispatch = useDispatch();

  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();

  const audio = useAudio("/slides/backgroundmusic_2.mp3", {
    volume: 0.2,
    playbackRate: 1,
    loop: true,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/01/bg.jpg",
    title_1: "<em>Welcome</em> to Incrediwear",
  });

  useEffect(() => {
    dispatch({
      type: "sliderImages",
      payload: [
        "/slides/01/bg.jpg",
        "/slides/02/bg.jpg",
        "/slides/03/bg.jpg",
        "/slides/04/bg.jpg",
      ],
    });
  }, []);

  useEffect(() => {
    setDim();
    window.addEventListener("resize", function (e) {
      setDim();
    });
  });

  const Styles = {
    slide: {
      backgroundImage: `url(${slideData.bg})`,
    },
    blankMargin: {
      height: "0px",
      marginBottom: "0rem",
      marginLeft: "0rem",
      marginRight: "0rem",
      marginTop: "4rem",
    },
  };

  const setDim = () => {

    let h = document.body.clientHeight;
    let w = (document.body.clientWidth >= 575) ? (baseImgSize.w * h) / baseImgSize.h : document.body.clientWidth ;

    if (document.body.clientWidth >= 575) {
      if (document.body.clientWidth <= w) {
        w = document.body.clientWidth;
        let ch = (baseImgSize.h * w) / baseImgSize.w;
        h = ch;
      }
    }

    // PAGE
    let sp = document.querySelector(".slidePage");
    if (sp) {
      sp.style.width = `${w}px`;
      sp.style.height = `${h}px`;
    }

    //FONT size
    let cFS = (baseFontSize * h) / baseImgSize.h;
    let b = document.getElementsByTagName("html")[0];
    b.style.fontSize = `${cFS}px`;
    return { w, h, cFS };
  };

  const handleClick = () => {
    audio.play();
    dispatch({
      type: "toggleBgMusic",
      payload: false,
    });
    router.push("/slides/02");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Incrediwear Interactive - 01</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage page_1`}>
          <div className={`container bg-none`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={`first_text`}
            >
              <span
                className="text size-4xl color-standard"
                dangerouslySetInnerHTML={{ __html: slideData.title_1 }}
              ></span>
            </motion.div>
            <div style={Styles.blankMargin}></div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.81, duration: 0.5 }}
            >
              <motion.button
                className="button size-xl color-transparent bg-orange"
                animate={{ scale: [0.95, 1.02, 0.95] }}
                onClick={() => handleClick()}
                transition={{
                  delay: 1,
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                }}
              >
                <span className="text-btn size-xl color-standard">
                  Get started
                </span>
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                  </svg>
                </div>
              </motion.button>
            </motion.div>
          </div>
          <FullScreenIcon />
          <a
            className="privacy bg-white"
            href="https://incrediwear.com/pages/privacy-policy"
            target="blank"
            rel="nofollow noreferrer"
          >
            Privacy Policy
          </a>
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_01;
