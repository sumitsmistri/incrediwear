import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";

function Slide_26() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);

  /* const audio = useAudio("/slides/26/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  }); */

  const [slideData, setslideData] = useState({
    bg: "/slides/26/bg.jpg",
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
      router.push("/slides/26");
    }, 17000);
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
    fetch('/slides/26/s.mp3')
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
        <title>Incrediwear Interactive - 25</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main
          initial={{
            backgroundPosition: "center",
            backgroundSize: "150%",
          }}
          animate={{
            backgroundPosition: "top left",
            backgroundSize: "100%",
          }}
          transition={{ delay: 0, duration: 1 }}
          style={Styles.slide}
          className={`slidePage slidePage page_25`}
        >
          <div className={`container slider-26  isSlideContentWrapper`}>
            <motion.div
              initial={{ x: 0, opacity: 0, height: "100%" }}
              animate={{ x: 0, opacity: 1, height: "100%" }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <div>
                <span
                  class="jsx-456089764 text size-xl color-standard"
                  style={{ marginBottom: "2rem", display: "block" }}
                >
                  <em>Less inflammation</em> and better circulation means{" "}
                  <em>more oxygen</em> and nutrients to cells and better{" "}
                  <em>flexibility</em> and musculoskeletal <em>health</em>.
                </span>
              </div>
            </motion.div>
          </div>

          <MenuSite next={26} islight={false} previous={24} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_26;
