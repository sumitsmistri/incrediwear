import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";

function Slide_18() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);

  /* const audio = useAudio("/slides/18/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  }); */

  const [slideData, setslideData] = useState({
    bg: "/slides/18/bg.jpg",
    logo: "/incrediwear_logo.webp",
    title_1: `<em>Thanks</em><br/>${name != "" ? name : "JOHN"},`,
    title_2: "For taking a few minutes to watch this presentation",
  });

  useEffect(() => {
    setDim();
    window.addEventListener("resize", function (e) {
      setDim();
    });
    /* setTimeout(() => {
      audio.play();
    }, 1000); */
    let t = setTimeout(() => {
      router.push("/slides/19");
    }, 10000);
    return () => {
      clearTimeout(t);
      //audio.pause();
    };
  }, []);

  const Styles = {
    slide: {
      backgroundImage: `url(${slideData.bg})`,
    },
    blankMargin: {
      height: "0px",
      marginBottom: "0rem",
      marginLeft: "0rem",
      marginRight: "0rem",
      marginTop: "3rem",
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

  useEffect(() => {
    // Access the Howl instance and AudioContext from the global window object
    const sound = window.sound;
    const audioCtx = window.audioCtx;

    // Create a new AudioBufferSourceNode and connect it to the AudioContext
    const source = audioCtx.createBufferSource();
    source.connect(audioCtx.destination);

    // Load the audio file and start playing it
    fetch('/slides/18/s.mp3')
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        audioCtx.decodeAudioData(buffer, (decodedData) => {
          source.buffer = decodedData;
          source.start(0);
        });
      });

    return () => {
      // Stop the audio when the page unmounts
      source.stop();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Incrediwear Interactive - 18</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage page_18`}>
          <div className={`container slider-18 bg-none isSlideContentWrapper`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span class="jsx-456089764 text size-2xl color-white">
                Incrediwear has <em>semiconductors</em> woven into the fabric.
                Powerful elements which emit <em>negative ions</em> and{" "}
                <em>infrared waves</em>.
              </span>
            </motion.div>
          </div>
          <div className="jsx-b65ece26d371a917 animation">
            <svg
              viewBox="0 0 161 181"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="jsx-b65ece26d371a917"
            >
              <path
                d="M160 1H134V26H159V1Z"
                stroke="#FF7D00"
                strokeWidth="2"
                stroke-miterlimit="10"
                className="smallRect"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
              ></path>
              <motion.path
                d="M133.66 14.22H59.13V53.06H122.12V180.27L1 179.72"
                stroke="#FF7D00"
                stroke-miterlimit="10"
                className="line"
                pathLength="1"
                stroke-dashoffset="0px"
                // stroke-dasharray="1px 1px"
                initial={{ strokeDasharray: "0.1px 0.1px" }}
                animate={{ strokeDasharray: "1px 1px" }}
                transition={{ delay: 0, duration: 1 }}
              ></motion.path>
              <motion.path
                d="M115 171H3L3 59L115 59L115 172.4Z"
                stroke="#FF7D00"
                strokeWidth="3"
                stroke-miterlimit="10"
                className="zoomRect"
                pathLength="1"
                stroke-dashoffset="0px"
                // stroke-dasharray="1px 1px"
                initial={{
                  visibility: "hidden",
                  strokeDasharray: "0.40px 0.40px",
                }}
                animate={{ visibility: "visible", strokeDasharray: "1px 1px" }}
                transition={{ delay: 1, duration: 2 }}
              ></motion.path>
            </svg>
            <motion.div
              className="jsx-b65ece26d371a917 imageWrapper"
              initial={{
                opacity: 0,
                scale: 0,
                transformOrigin: "bottom right",
              }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <div>
                <img
                  src="/slides/18/zoom.jpg"
                  alt="zoomed sock"
                  className="jsx-b65ece26d371a917"
                />
              </div>
            </motion.div>
          </div>

          <MenuSite next={19} islight={true} previous={17} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_18;
