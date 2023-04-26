import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";

function Slide_10() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);

  /* const audio = useAudio("/slides/10/s10.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  }); */

  const [slideData, setslideData] = useState({
    bg: "/slides/10/bg.jpg",
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
    // setTimeout(() => {
    //   router.push("/slides/04");
    // }, 5000);
    /* return () => {
      audio.pause();
    }; */
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
      marginTop: "8rem",
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
    fetch('/slides/10/s10.mp3')
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
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Incrediwear Interactive - 10</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage page_10`}>
          <div className={`container bg-none slider-10 first`}>
            <div style={Styles.blankMargin} className="less_margin"></div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="jsx-456089764 text size-2xl color-standard">
                The mission of Incrediwear is to
                <br /> help people to
                <br /> <em>stay active</em> and
                <br /> have <em>less pain</em>
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="jsx-334748211 container bg-none second"
          >
            <div className="jsx-3882112729 flex--box">
              <div className="">
                <div className="jsx-383eab4433b76272 videobox">
                  <VideoArea />
                </div>
              </div>
              <div className="">
                <span className="jsx-931690302 text size-s color-standard">
                  Jackson Corley is the founder of Incrediwear. Hear his
                  personal story and how this motivated him to help people
                  having a better, pain-free life.
                </span>
                <motion.button
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="jsx-dd33fbfc98d4eb22 button size-m color-undefined"
                  style={{ position: "absolute", bottom: "3rem" }}
                  onClick={() => router.push("/slides/11")}
                >
                  <div className="jsx-dd33fbfc98d4eb22 bg"></div>
                  <span className="jsx-2945311205 text size-m color-standard">
                    Move ahead
                  </span>
                  <div className="jsx-dd33fbfc98d4eb22 icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <MenuSite next={11} previous={9} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_10;
