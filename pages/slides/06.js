import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import MenuSite from "./MenuSite";
import { useDispatch } from "react-redux";

function Slide_02() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const dispatch = useDispatch();

  /* const audio = useAudio("/slides/06/t06.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  }); */

  const [slideData, setslideData] = useState({
    bg: "/slides/06/bg.jpg",
    title_1: "<em>To start,</em><br/>",
    title_2:
      "here are 2 <em>critical questions</em><br/> about the customers in your store:",
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
      router.push("/slides/07");
    }, 20000);

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

  useEffect(() => {
    // Access the Howl instance and AudioContext from the global window object
    const sound = window.sound;
    const audioCtx = window.audioCtx;

    // Create a new AudioBufferSourceNode and connect it to the AudioContext
    const source = audioCtx.createBufferSource();
    source.connect(audioCtx.destination);

    // Load the audio file and start playing it
    fetch('/slides/06/t06.mp3')
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
        <title>Incrediwear Interactive - 06</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage page_6`}>
          <motion.div
            className={`container bg-none  slider-6`}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div style={Styles.blankMargin} className="no-mob"></div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="text size-s color-standard ">
                1.&nbsp;&nbsp;
                <em>1 in 4 </em>people coming into your store are dealing with{" "}
                <em>injury</em> or <em>pain</em> - <em>25%!</em>
              </span>
            </motion.div>
            <div style={Styles.blankMargin} className="no-mob"></div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 10, duration: 0.5 }}
            >
              <span className="text size-s color-standard ">
                2.&nbsp;&nbsp;<em>100%! Yes</em>, ALL people want to
                <br />
                prevent injuries, perform better, <br />
                and <em>recover faster</em>.
              </span>
            </motion.div>
            <div style={Styles.blankMargin} className="no-mob"></div>
          </motion.div>

          <MenuSite next={7} islight={true} previous={5} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_02;
