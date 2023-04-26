import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";
import RangeInput from "./RangeInput";
import RangeInputEnergy from "./RangeInputEnergy";

function Slide_22() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);

  /* const audio = useAudio("/slides/22/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  }); */

  const [slideData, setslideData] = useState({
    bg: "/slides/20/bg.jpg",
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
      router.push("/slides/22");
    }, 13000);
    return () => {
      clearTimeout(t);
      //audio.pause();
    };
  }, []);

  const Styles = {
    slide: {
      background: `linear-gradient(rgb(24, 34, 36) 0%, rgb(49, 59, 61) 100%) 0% 0% / 100%`,
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
    fetch('/slides/22/s.mp3')
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
        <title>Incrediwear Interactive - 21</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage page_21`}>
          <div className={`container slider-21 bg-none isSlideContentWrapper`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="jsx-2945311205 text size-2xl color-white">
                <em>11</em> light bulbs* could light up with the energy{" "}
                <em>produced by your body</em> in form of <em>heat</em>
              </span>

              <div style={Styles.blankMargin}></div>
            </motion.div>
          </div>
          <div style={{ maxWidth: "90%", margin: "auto" }} className="full_width_mob">
            <RangeInputEnergy onlyView={true} />
          </div>
          <div style={Styles.blankMargin}></div>
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 7, duration: 0.5 }}
            className="jsx-2589450523 text size-m color-white"
            style={{ paddingLeft: "5rem" }}
          >
            This is when the body is relaxed. An active body produces up to 5
            times more heat!
          </motion.span>

          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="jsx-3942010232rr text size-s color-white"
          >
            *A 9 Watts energy saving light bulb is assumed, which produces 500
            Lumen of brightness. 500 Lumen is what a conventional/former 40
            Watts light bulb produces.
          </motion.span>

          <MenuSite next={22} islight={true} previous={20} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_22;
